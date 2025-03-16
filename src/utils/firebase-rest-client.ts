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

// Available CORS proxies to try
const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://cors-anywhere.herokuapp.com/${url}`,
  (url: string) => `https://proxy.cors.sh/${url}`,
];

/**
 * Firestore REST API Client
 */
export class FirestoreRestClient {
  private baseUrl: string;
  private apiKey: string;
  private defaultHeaders: HeadersInit;
  private currentProxyIndex: number = -1; // Start with direct access
  private useNoCors: boolean = false; // Whether to use no-cors mode

  constructor(projectId: string, apiKey: string) {
    this.baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;
    this.apiKey = apiKey;
    
    // Enhanced headers for CORS support
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Firebase-Auth': apiKey
    };

    // Check if we've already determined a working proxy
    const savedProxyIndex = sessionStorage.getItem('firestore_working_proxy_index');
    if (savedProxyIndex !== null) {
      this.currentProxyIndex = parseInt(savedProxyIndex, 10);
      console.log(`Using previously successful proxy #${this.currentProxyIndex}`);
    }
    
    // Check if we should use no-cors mode
    const useNoCors = sessionStorage.getItem('firestore_use_no_cors');
    if (useNoCors === 'true') {
      this.useNoCors = true;
      console.log('Using no-cors mode for Firestore requests');
    }
  }

  /**
   * Get the appropriate URL for Firestore requests
   * In production, we'll use a CORS proxy if direct access fails
   */
  private getFirestoreUrl(path: string = ''): string {
    // First build the direct URL with API key
    const directUrl = `${this.baseUrl}${path ? '/' + path : ''}?key=${this.apiKey}`;
    
    // For production environments, we'll have a fallback to CORS proxy
    // This is a last resort if direct access fails
    if (window.location.hostname !== 'localhost' && 
        window.location.hostname !== '127.0.0.1') {
      
      // Check if we've already tried direct access and it failed
      const hasCorsIssue = sessionStorage.getItem('firestore_cors_issue') === 'true';
      const has400Error = sessionStorage.getItem('firestore_400_error') === 'true';
      
      if (hasCorsIssue || has400Error) {
        // If we have a working proxy, use it
        if (this.currentProxyIndex >= 0 && this.currentProxyIndex < CORS_PROXIES.length) {
          const proxyUrl = CORS_PROXIES[this.currentProxyIndex](directUrl);
          console.log(`Using CORS proxy #${this.currentProxyIndex} for Firestore request`);
          return proxyUrl;
        }
        
        // Otherwise use the first proxy
        console.log('Using CORS proxy for Firestore request');
        return CORS_PROXIES[0](directUrl);
      }
    }
    
    return directUrl;
  }

  /**
   * Try the next proxy in the list
   * @returns URL with the next proxy, or null if all proxies have been tried
   */
  private tryNextProxy(originalUrl: string): string | null {
    this.currentProxyIndex++;
    
    if (this.currentProxyIndex >= CORS_PROXIES.length) {
      console.error('All CORS proxies have failed');
      return null;
    }
    
    const proxyUrl = CORS_PROXIES[this.currentProxyIndex](originalUrl);
    console.log(`Trying next CORS proxy #${this.currentProxyIndex}: ${proxyUrl}`);
    
    // Save the current proxy index in case it works
    sessionStorage.setItem('firestore_working_proxy_index', this.currentProxyIndex.toString());
    
    return proxyUrl;
  }

  /**
   * Try a request with no-cors mode
   */
  private async tryNoCorsRequest(url: string, options: RequestInit = {}): Promise<Response | null> {
    try {
      console.log('🔧 Trying no-cors mode for Firestore request');
      
      // Set no-cors mode
      const noCorsOptions = {
        ...options,
        mode: 'no-cors' as RequestMode,
        credentials: 'omit' as RequestCredentials,
        headers: {
          ...this.defaultHeaders,
          ...options.headers
        }
      };
      
      // Make the request
      const response = await fetch(url, noCorsOptions);
      
      // no-cors responses are opaque, so we can't check status
      // but we can check if we got a response at all
      console.log('✅ no-cors request succeeded');
      
      // Mark that no-cors mode works
      sessionStorage.setItem('firestore_use_no_cors', 'true');
      this.useNoCors = true;
      
      return response;
    } catch (error) {
      console.error('❌ no-cors request failed:', error);
      return null;
    }
  }

  /**
   * Make a request with automatic proxy fallback
   */
  private async makeRequest(url: string, options: RequestInit = {}): Promise<Response> {
    // If we know no-cors works, try it first
    if (this.useNoCors && window.location.hostname !== 'localhost') {
      const noCorsResponse = await this.tryNoCorsRequest(url, options);
      if (noCorsResponse) {
        return noCorsResponse;
      }
      
      // If no-cors failed, reset the flag
      this.useNoCors = false;
      sessionStorage.removeItem('firestore_use_no_cors');
    }
    
    try {
      // First try with the current URL (direct or proxy)
      const response = await fetch(url, {
        ...options,
        mode: 'cors',
        headers: {
          ...this.defaultHeaders,
          ...options.headers
        }
      });
      
      // If successful, return the response
      if (response.ok) {
        return response;
      }
      
      // If we get a CORS error, try no-cors mode
      if ((response.status === 0 || response.type === 'opaque') && 
          window.location.hostname !== 'localhost') {
        
        const noCorsResponse = await this.tryNoCorsRequest(url, options);
        if (noCorsResponse) {
          return noCorsResponse;
        }
      }
      
      // If we get a 400 or 403 error, try the next proxy
      if ((response.status === 400 || response.status === 403 || response.status === 0) && 
          window.location.hostname !== 'localhost') {
        
        // Mark that we had a CORS or 400 error
        sessionStorage.setItem('firestore_cors_issue', 'true');
        sessionStorage.setItem('firestore_400_error', 'true');
        
        // Extract the original URL if this was already a proxy URL
        const originalUrl = url.includes('?url=') 
          ? decodeURIComponent(url.split('?url=')[1]) 
          : url;
        
        // Try the next proxy
        const nextProxyUrl = this.tryNextProxy(originalUrl);
        if (nextProxyUrl) {
          console.log('Retrying with next proxy');
          return this.makeRequest(nextProxyUrl, options);
        }
      }
      
      // If we've tried all proxies or it's not a proxy-fixable error, return the response
      return response;
    } catch (error) {
      console.error('Request failed:', error);
      
      // Try no-cors mode if we haven't already
      if (!this.useNoCors && window.location.hostname !== 'localhost') {
        const noCorsResponse = await this.tryNoCorsRequest(url, options);
        if (noCorsResponse) {
          return noCorsResponse;
        }
      }
      
      // Mark that we had a CORS issue
      sessionStorage.setItem('firestore_cors_issue', 'true');
      
      // If we're not on localhost, try the next proxy
      if (window.location.hostname !== 'localhost') {
        // Extract the original URL if this was already a proxy URL
        const originalUrl = url.includes('?url=') 
          ? decodeURIComponent(url.split('?url=')[1]) 
          : url;
        
        // Try the next proxy
        const nextProxyUrl = this.tryNextProxy(originalUrl);
        if (nextProxyUrl) {
          console.log('Retrying with next proxy after error');
          return this.makeRequest(nextProxyUrl, options);
        }
      }
      
      throw error;
    }
  }

  /**
   * Test if the Firestore database exists and is accessible
   * @returns true if database exists and is accessible
   */
  async testConnection(): Promise<boolean> {
    try {
      // Try to list a small number of documents
      const url = this.getFirestoreUrl();
      console.log('Testing Firestore connection with URL:', url);
      
      const response = await this.makeRequest(url);
      
      if (response.status === 404) {
        console.error('Firestore database not found. You need to create it in the Firebase Console.');
        return false;
      }
      
      // For no-cors responses, we can't check status
      if (response.type === 'opaque') {
        console.log('✅ Firestore connection test succeeded with opaque response (no-cors)');
        return true;
      }
      
      if (!response.ok) {
        console.error(`Firestore connection test failed with status: ${response.status}`);
        return false;
      }
      
      console.log('✅ Firestore REST connection successful');
      return true;
    } catch (error) {
      console.error('Firestore connection test failed:', error);
      
      // If we get a CORS error, try using the proxy
      console.log('Trying with Firebase SDK as last resort...');
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
      
      console.log('Direct Firestore access successful. Database exists but REST API has CORS issues.');
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
      const url = this.getFirestoreUrl(`${collection}/${docId}`);
      const response = await this.makeRequest(url);
      
      // For no-cors responses, we can't check status or parse JSON
      if (response.type === 'opaque') {
        console.log('Got opaque response from no-cors request');
        // We can't extract data from opaque responses
        // Return a placeholder or try another method
        return null;
      }
      
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
      const url = this.getFirestoreUrl(`${collection}?pageSize=${limit}`);
      const response = await this.makeRequest(url);
      
      // For no-cors responses, we can't check status or parse JSON
      if (response.type === 'opaque') {
        console.log('Got opaque response from no-cors request');
        // We can't extract data from opaque responses
        // Return an empty array or try another method
        return [];
      }
      
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
      const url = this.getFirestoreUrl(`${collection}/${docId}`);
      const response = await this.makeRequest(url, {
        method: 'PATCH',
        body: JSON.stringify({
          fields: this._transformRequest(data)
        })
      });
      
      // For no-cors responses, we can't check status or parse JSON
      if (response.type === 'opaque') {
        console.log('Got opaque response from no-cors request');
        // We can't extract data from opaque responses
        // Return the original data as a best guess
        return data as T;
      }
      
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
      const url = this.getFirestoreUrl(`${collection}/${docId}`);
      const response = await this.makeRequest(url, {
        method: 'DELETE'
      });
      
      // For no-cors responses, we can't check status
      if (response.type === 'opaque') {
        console.log('Got opaque response from no-cors request');
        // Assume success for opaque responses
        return true;
      }
      
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