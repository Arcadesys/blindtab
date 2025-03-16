// Firebase REST API Fix - Copy and paste this into your browser console
(function() {
  console.log('🔧 Setting up Firebase REST API client...');
  
  // Project config
  const PROJECT_ID = 'blindtab-db';
  const API_KEY = 'AIzaSyDummyKeyForSecurity'; // Replace with your actual API key
  
  // Create a REST client for Firestore
  window.firestoreREST = {
    // Base URL for Firestore REST API
    baseUrl: `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`,
    
    // Get a document
    async get(collection, docId) {
      console.log(`🔍 Getting document: ${collection}/${docId}`);
      try {
        const response = await fetch(`${this.baseUrl}/${collection}/${docId}?key=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return this._transformResponse(data);
      } catch (error) {
        console.error('❌ Error getting document:', error);
        throw error;
      }
    },
    
    // List documents in a collection
    async list(collection, limit = 100) {
      console.log(`📋 Listing documents in: ${collection}`);
      try {
        const response = await fetch(`${this.baseUrl}/${collection}?pageSize=${limit}&key=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return {
          docs: data.documents ? data.documents.map(doc => this._transformResponse(doc)) : []
        };
      } catch (error) {
        console.error('❌ Error listing documents:', error);
        throw error;
      }
    },
    
    // Create or update a document
    async set(collection, docId, data) {
      console.log(`💾 Setting document: ${collection}/${docId}`);
      try {
        const response = await fetch(`${this.baseUrl}/${collection}/${docId}?key=${API_KEY}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields: this._transformRequest(data)
          })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const responseData = await response.json();
        return this._transformResponse(responseData);
      } catch (error) {
        console.error('❌ Error setting document:', error);
        throw error;
      }
    },
    
    // Delete a document
    async delete(collection, docId) {
      console.log(`🗑️ Deleting document: ${collection}/${docId}`);
      try {
        const response = await fetch(`${this.baseUrl}/${collection}/${docId}?key=${API_KEY}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return true;
      } catch (error) {
        console.error('❌ Error deleting document:', error);
        throw error;
      }
    },
    
    // Transform Firestore response to regular JS object
    _transformResponse(data) {
      if (!data.fields) return null;
      
      const result = {};
      for (const [key, value] of Object.entries(data.fields)) {
        result[key] = this._extractValue(value);
      }
      
      // Add document ID if available
      if (data.name) {
        const parts = data.name.split('/');
        result.id = parts[parts.length - 1];
      }
      
      return result;
    },
    
    // Extract value from Firestore field
    _extractValue(fieldValue) {
      const type = Object.keys(fieldValue)[0];
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
          return this._transformResponse(value);
        case 'arrayValue':
          return value.values ? value.values.map(v => this._extractValue(v)) : [];
        case 'timestampValue':
          return new Date(value);
        default:
          console.warn('⚠️ Unknown field type:', type);
          return value;
      }
    },
    
    // Transform JS object to Firestore fields
    _transformRequest(data) {
      const fields = {};
      
      for (const [key, value] of Object.entries(data)) {
        // Skip id field
        if (key === 'id') continue;
        fields[key] = this._createFieldValue(value);
      }
      
      return fields;
    },
    
    // Create Firestore field value
    _createFieldValue(value) {
      if (value === null || value === undefined) {
        return { nullValue: null };
      }
      
      switch (typeof value) {
        case 'string':
          return { stringValue: value };
        case 'number':
          return Number.isInteger(value) ? 
            { integerValue: value.toString() } : 
            { doubleValue: value };
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
          console.warn('⚠️ Unsupported value type:', typeof value);
          return { stringValue: String(value) };
      }
    }
  };
  
  // Test the REST client
  async function testRESTClient() {
    try {
      console.log('🧪 Testing REST client...');
      
      // Test document
      const testCollection = 'firebase_test';
      const testDocId = 'rest_test_' + Date.now();
      const testData = {
        message: 'Hello from REST API',
        timestamp: new Date(),
        number: 42,
        nested: {
          field: 'nested value'
        },
        array: [1, 2, 'three']
      };
      
      // Create test document
      await firestoreREST.set(testCollection, testDocId, testData);
      console.log('✅ Document created successfully');
      
      // Get the document
      const doc = await firestoreREST.get(testCollection, testDocId);
      console.log('✅ Document retrieved successfully:', doc);
      
      // Delete the document
      await firestoreREST.delete(testCollection, testDocId);
      console.log('✅ Document deleted successfully');
      
      console.log('🎉 REST client is working! You can now use window.firestoreREST to interact with Firestore.');
    } catch (error) {
      console.error('❌ REST client test failed:', error);
    }
  }
  
  // Run the test
  testRESTClient();
  
  console.log('✅ Firebase REST API client is ready to use!');
  console.log('📝 Usage examples:');
  console.log('  - Get document: firestoreREST.get("collection", "docId")');
  console.log('  - List documents: firestoreREST.list("collection")');
  console.log('  - Set document: firestoreREST.set("collection", "docId", { field: "value" })');
  console.log('  - Delete document: firestoreREST.delete("collection", "docId")');
})(); 