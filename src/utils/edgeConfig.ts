import { createClient } from '@vercel/edge-config';
import { env, isDev } from './env';

// Get the Edge Config URL from environment variables
const edgeConfigUrl = import.meta.env.VITE_EDGE_CONFIG;

// Create Edge Config client only if EDGE_CONFIG is available
let edgeConfigClient = null;
try {
  if (edgeConfigUrl) {
    // Format the connection string properly if needed
    const connectionString = edgeConfigUrl.includes('edge-config.vercel.com') 
      ? `https://${edgeConfigUrl.split('/').pop()}@edge-config.vercel.com`
      : edgeConfigUrl;
    
    edgeConfigClient = createClient(connectionString);
    console.log('[EdgeConfig] Client initialized successfully');
  }
} catch (error) {
  console.error('[EdgeConfig] Failed to initialize client:', error);
  edgeConfigClient = null;
}

/**
 * Get a value from Edge Config
 * @param key The key to get from Edge Config
 * @param defaultValue The default value to return if the key doesn't exist
 * @returns The value from Edge Config or the default value
 */
export async function getEdgeConfig<T>(key: string, defaultValue?: T): Promise<T | undefined> {
  try {
    // In development, we might want to mock some values
    if (isDev && (!edgeConfigUrl || !edgeConfigClient)) {
      console.log(`[EdgeConfig] Using mock value for ${key}`);
      return getMockValue(key) as T || defaultValue;
    }
    
    if (!edgeConfigClient) {
      console.warn('[EdgeConfig] No client available, using default value');
      return defaultValue;
    }
    
    const value = await edgeConfigClient.get<T>(key);
    return value ?? defaultValue;
  } catch (error) {
    console.error(`[EdgeConfig] Error getting ${key}:`, error);
    return defaultValue;
  }
}

/**
 * Get all values from Edge Config
 * @returns All values from Edge Config
 */
export async function getAllEdgeConfig(): Promise<Record<string, any>> {
  try {
    if (isDev && (!edgeConfigUrl || !edgeConfigClient)) {
      console.log('[EdgeConfig] Using mock values');
      return MOCK_CONFIG;
    }
    
    if (!edgeConfigClient) {
      console.warn('[EdgeConfig] No client available, using mock values');
      return MOCK_CONFIG;
    }
    
    return await edgeConfigClient.getAll();
  } catch (error) {
    console.error('[EdgeConfig] Error getting all values:', error);
    return MOCK_CONFIG; // Return mock config as fallback
  }
}

/**
 * Check if Edge Config is available
 * @returns True if Edge Config is available
 */
export async function isEdgeConfigAvailable(): Promise<boolean> {
  try {
    if (isDev && !edgeConfigUrl) {
      return true; // Pretend it's available in development
    }
    
    if (!edgeConfigClient) {
      return false;
    }
    
    await edgeConfigClient.get('__check__');
    return true;
  } catch (error) {
    return false;
  }
}

// Mock values for development
const MOCK_CONFIG = {
  featureFlags: {
    enableNewSongEditor: true,
    enableAdvancedSearch: true,
    enableSharing: false,
    enablePrint: true
  },
  maintenance: {
    enabled: false,
    message: 'BlindTab is currently undergoing maintenance. Please check back later.'
  },
  announcements: [
    {
      id: 'welcome',
      title: 'Welcome to BlindTab!',
      message: 'Thanks for trying out the new React version of BlindTab.',
      type: 'info',
      dismissible: true
    }
  ]
};

// Get mock value for a specific key
function getMockValue(key: string): any {
  const keys = key.split('.');
  let value = MOCK_CONFIG;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return undefined;
    }
  }
  
  return value;
} 