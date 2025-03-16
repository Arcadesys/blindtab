import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { env, isDev } from './env';

// Configuration types
export interface FeatureFlags {
  enableNewSongEditor: boolean;
  enableAdvancedSearch: boolean;
  enableSharing: boolean;
  enablePrint: boolean;
}

export interface MaintenanceConfig {
  enabled: boolean;
  message: string;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  dismissible: boolean;
}

export interface AppConfig {
  featureFlags: FeatureFlags;
  maintenance: MaintenanceConfig;
  announcements: Announcement[];
}

// Default configuration for development
const DEFAULT_CONFIG: AppConfig = {
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

/**
 * Get configuration from Firestore
 * @param key Optional dot-notation key to get specific config value
 * @returns Configuration value or entire config object
 */
export async function getConfig<T = AppConfig>(key?: string): Promise<T> {
  try {
    if (isDev) {
      console.log('[Config] Using development configuration');
      return key ? getValueByPath(DEFAULT_CONFIG, key) : DEFAULT_CONFIG as unknown as T;
    }

    const configDoc = await getDoc(doc(db, 'config', 'app'));
    if (!configDoc.exists()) {
      console.warn('[Config] No configuration found in Firestore, using defaults');
      return key ? getValueByPath(DEFAULT_CONFIG, key) : DEFAULT_CONFIG as unknown as T;
    }

    const config = configDoc.data() as AppConfig;
    return key ? getValueByPath(config, key) : config as unknown as T;
  } catch (error) {
    console.error('[Config] Error fetching configuration:', error);
    return key ? getValueByPath(DEFAULT_CONFIG, key) : DEFAULT_CONFIG as unknown as T;
  }
}

/**
 * Helper function to get nested object value using dot notation
 */
function getValueByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
} 