/**
 * Firebase Write Stream Fix (Simple Version)
 * 
 * This script fixes the WebChannel Write stream issue in production
 * without attempting to test the connection.
 */

(function() {
  console.group('🔧 Firebase Write Fix (Simple)');
  
  try {
    // Find the Firestore instance
    const db = window.db || window._fixed_db;
    
    if (!db) {
      console.error('❌ Could not find Firestore instance. Run the Firebase fix script first.');
      console.groupEnd();
      return;
    }
    
    console.log('✅ Found Firestore instance');
    
    // Create a wrapper around the db to handle write errors
    const originalDb = db;
    
    // Create a proxy to intercept and handle write operations
    const dbProxy = new Proxy(db, {
      get(target, prop) {
        const value = target[prop];
        
        // If it's a method that might involve writing, wrap it
        if (typeof value === 'function' && 
            (prop === 'collection' || 
             prop === 'doc' || 
             prop === 'batch' || 
             prop === 'runTransaction')) {
          
          return function(...args) {
            const result = value.apply(target, args);
            
            // If the result has methods like add, set, update, or delete, wrap those too
            if (result && typeof result === 'object') {
              return new Proxy(result, {
                get(targetObj, methodProp) {
                  const method = targetObj[methodProp];
                  
                  if (typeof method === 'function' && 
                      (methodProp === 'add' || 
                       methodProp === 'set' || 
                       methodProp === 'update' || 
                       methodProp === 'delete')) {
                    
                    return async function(...methodArgs) {
                      try {
                        return await method.apply(targetObj, methodArgs);
                      } catch (writeError) {
                        console.error('[Firebase] Write operation failed:', writeError);
                        
                        // If it's a WebChannel error, retry with different settings
                        if (writeError.message?.includes('jd') || 
                            writeError.message?.includes('Bad Request') || 
                            writeError.message?.includes('400')) {
                          
                          console.log('[Firebase] Detected WebChannel Write error, retrying...');
                          
                          // Wait a bit before retrying
                          await new Promise(resolve => setTimeout(resolve, 1000));
                          
                          // Retry the operation
                          return method.apply(targetObj, methodArgs);
                        }
                        
                        // Re-throw if it's not a WebChannel error
                        throw writeError;
                      }
                    };
                  }
                  
                  return method;
                }
              });
            }
            
            return result;
          };
        }
        
        return value;
      }
    });
    
    // Replace the db with our proxy
    window.db = dbProxy;
    window._fixed_db = dbProxy;
    
    console.log('✅ Applied Write stream error handling');
    console.log('🔄 Write operations will now automatically retry if they fail due to WebChannel errors');
    
  } catch (error) {
    console.error('❌ Error applying Write stream fix:', error);
  }
  
  console.groupEnd();
})(); 