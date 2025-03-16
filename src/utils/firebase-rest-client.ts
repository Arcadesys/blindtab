/**
 * Firebase REST API Client
 * A lightweight client for interacting with Firestore via REST API
 * This avoids WebChannel connection issues completely
 */

// Firebase project configuration
const PROJECT_CONFIG = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'blindtab-db',
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
};

// Types for Firestore data
type FirestoreValue = 
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { nullValue: null }
  | { mapValue: { fields: Record<string, FirestoreValue> } }
  | { arrayValue: { values: FirestoreValue[] } }
  | { timestampValue: string };

type FirestoreDocument = {
  name?: string;
  fields?: Record<string, FirestoreValue>;
};

type FirestoreListResponse = {
  documents?: FirestoreDocument[];
};

/**
 * Firestore REST API Client
 */
export class FirestoreRestClient {
  private baseUrl: string;
  private apiKey: string;
  private defaultHeaders: HeadersInit;

  constructor(projectId: string, apiKey: string) {
    this.baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;
    this.apiKey = apiKey;
    
    // Enhanced headers for CORS support
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  /**
   * Get the appropriate URL for Firestore requests
   * In production, we'll use a CORS proxy if direct access fails
   */
  private getFirestoreUrl(path: string = ''): string {
    // First try direct access with API key
    const directUrl = `${this.baseUrl}${path ? '/' + path : ''}?key=${this.apiKey}`;
    
    // For production environments, we'll have a fallback to CORS proxy
    // This is a last resort if direct access fails
    if (window.location.hostname !== 'localhost' && 
        window.location.hostname !== '127.0.0.1') {
      
      // Check if we've already tried direct access and it failed
      const hasCorsIssue = sessionStorage.getItem('firestore_cors_issue') === 'true';
      
      if (hasCorsIssue) {
        // Use a CORS proxy service
        // Note: For a production app, you should set up your own proxy
        // This is just a temporary solution for debugging
        console.log('Using CORS proxy for Firestore request');
        return `https://corsproxy.io/?${encodeURIComponent(directUrl)}`;
      }
    }
    
    return directUrl;
  }

  /**
   * Test if the Firestore database exists and is accessible
   * @returns true if database exists and is accessible
   */
  async testConnection(): Promise<boolean> {
    try {
      // Try to list a small number of documents
      const response = await fetch(this.getFirestoreUrl(), {
        method: 'GET',
        headers: this.defaultHeaders
      });
      
      if (response.status === 404) {
        console.error('Firestore database not found. You need to create it in the Firebase Console.');
        return false;
      }
      
      if (!response.ok) {
        console.error(`Firestore connection test failed with status: ${response.status}`);
        
        // If we get a CORS error, mark it for future requests
        if (response.status === 0 || response.type === 'opaque') {
          console.log('CORS issue detected, will use proxy for future requests');
          sessionStorage.setItem('firestore_cors_issue', 'true');
          
          // Try again with the proxy
          return this.testConnectionWithProxy();
        }
        
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Firestore connection test failed:', error);
      
      // If we get a CORS error, try using the proxy
      console.log('Trying with CORS proxy...');
      return this.testConnectionWithProxy();
    }
  }
  
  /**
   * Test connection using a CORS proxy as fallback
   */
  private async testConnectionWithProxy(): Promise<boolean> {
    try {
      // Force using the proxy by temporarily setting the CORS issue flag
      sessionStorage.setItem('firestore_cors_issue', 'true');
      
      // Try to list a small number of documents through the proxy
      const proxyUrl = this.getFirestoreUrl();
      console.log('Testing connection with proxy URL:', proxyUrl);
      
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: this.defaultHeaders
      });
      
      if (!response.ok) {
        console.error(`Proxy connection test failed with status: ${response.status}`);
        return false;
      }
      
      console.log('✅ Connection successful through CORS proxy');
      return true;
    } catch (error) {
      console.error('Proxy connection test failed:', error);
      
      // If proxy also fails, try direct Firebase SDK as last resort
      console.log('Trying direct Firebase SDK as last resort...');
      return this.testWithFirebaseSDK();
    }
  }
  
  /**
   * Test with Firebase SDK as a last resort
   */
  private async testWithFirebaseSDK(): Promise<boolean> {
    try {
      // Import Firebase SDK dynamically to avoid circular dependencies
      const { collection, getDocs, query, limit } = await import('firebase/firestore');
      const { db } = await import('./firebase');
      
      // Try to access any collection
      const testQuery = query(collection(db, 'firebase_test'), limit(1));
      await getDocs(testQuery);
      
      console.log('Direct Firestore access successful. Using Firebase SDK instead of REST.');
      return true;
    } catch (sdkError: any) {
      // If this also fails with a "not found" error, the database doesn't exist
      if (sdkError.code === 'not-found' || 
          sdkError.message?.includes('not found') || 
          sdkError.message?.includes('404')) {
        console.error('Firestore database not found using direct access.');
        return false;
      }
      
      // For other errors, we can't be sure if the database exists
      console.error('Direct Firestore access failed with error:', sdkError);
      return false;
    }
  }

  /**
   * Get a document from Firestore
   * @param collection Collection name
   * @param docId Document ID
   * @returns Document data or null if not found
   */
  async get<T>(collection: string, docId: string): Promise<T | null> {
    try {
      const response = await fetch(this.getFirestoreUrl(`${collection}/${docId}`), {
        headers: this.defaultHeaders
      });
      
      if (response.status === 404) {
        return null;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return this._transformResponse(data) as T;
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  }

  /**
   * List documents in a collection
   * @param collection Collection name
   * @param limit Maximum number of documents to return
   * @returns Array of documents
   */
  async list<T>(collection: string, limit = 100): Promise<T[]> {
    try {
      const response = await fetch(this.getFirestoreUrl(`${collection}?pageSize=${limit}`), {
        headers: this.defaultHeaders
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: FirestoreListResponse = await response.json();
      
      if (!data.documents) {
        return [];
      }
      
      return data.documents.map(doc => this._transformResponse(doc) as T);
    } catch (error) {
      console.error('Error listing documents:', error);
      throw error;
    }
  }

  /**
   * Create or update a document
   * @param collection Collection name
   * @param docId Document ID
   * @param data Document data
   * @returns Updated document data
   */
  async set<T>(collection: string, docId: string, data: any): Promise<T> {
    try {
      const response = await fetch(this.getFirestoreUrl(`${collection}/${docId}`), {
        method: 'PATCH',
        headers: this.defaultHeaders,
        body: JSON.stringify({
          fields: this._transformRequest(data)
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseData = await response.json();
      return this._transformResponse(responseData) as T;
    } catch (error) {
      console.error('Error setting document:', error);
      throw error;
    }
  }

  /**
   * Delete a document
   * @param collection Collection name
   * @param docId Document ID
   * @returns true if successful
   */
  async delete(collection: string, docId: string): Promise<boolean> {
    try {
      const response = await fetch(this.getFirestoreUrl(`${collection}/${docId}`), {
        method: 'DELETE',
        headers: this.defaultHeaders
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  /**
   * Transform Firestore response to regular JS object
   */
  private _transformResponse(data: FirestoreDocument): any {
    if (!data.fields) return null;
    
    const result: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(data.fields)) {
      result[key] = this._extractValue(value);
    }
    
    // Add document ID if available
    if (data.name) {
      const parts = data.name.split('/');
      result.id = parts[parts.length - 1];
    }
    
    return result;
  }

  /**
   * Extract value from Firestore field
   */
  private _extractValue(fieldValue: FirestoreValue): any {
    const type = Object.keys(fieldValue)[0] as keyof FirestoreValue;
    const value = fieldValue[type];
    
    switch (type) {
      case 'stringValue':
      case 'integerValue':
      case 'doubleValue':
      case 'booleanValue':
        return value;
      case 'nullValue':
        return null;
      case 'mapValue':
        return this._transformResponse(value as FirestoreDocument);
      case 'arrayValue':
        return (value as { values: FirestoreValue[] }).values 
          ? (value as { values: FirestoreValue[] }).values.map(v => this._extractValue(v)) 
          : [];
      case 'timestampValue':
        return new Date(value as string);
      default:
        console.warn('Unknown field type:', type);
        return value;
    }
  }

  /**
   * Transform JS object to Firestore fields
   */
  private _transformRequest(data: any): Record<string, FirestoreValue> {
    const fields: Record<string, FirestoreValue> = {};
    
    for (const [key, value] of Object.entries(data)) {
      // Skip id field
      if (key === 'id') continue;
      fields[key] = this._createFieldValue(value);
    }
    
    return fields;
  }

  /**
   * Create Firestore field value
   */
  private _createFieldValue(value: any): FirestoreValue {
    if (value === null || value === undefined) {
      return { nullValue: null };
    }
    
    switch (typeof value) {
      case 'string':
        return { stringValue: value };
      case 'number':
        return Number.isInteger(value) 
          ? { integerValue: value.toString() } 
          : { doubleValue: value };
      case 'boolean':
        return { booleanValue: value };
      case 'object':
        if (Array.isArray(value)) {
          return {
            arrayValue: {
              values: value.map(v => this._createFieldValue(v))
            }
          };
        } else if (value instanceof Date) {
          return { timestampValue: value.toISOString() };
        } else {
          return {
            mapValue: {
              fields: this._transformRequest(value)
            }
          };
        }
      default:
        console.warn('Unsupported type:', typeof value);
        return { stringValue: String(value) };
    }
  }
}

// Create a singleton instance with default config
// This will be replaced with actual values in firebase.ts
export const firestoreRest = new FirestoreRestClient(
  PROJECT_CONFIG.projectId,
  PROJECT_CONFIG.apiKey
); 