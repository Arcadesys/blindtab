/**
 * Environment configuration utility for BlindTab
 * 
 * This file manages environment-specific configuration and provides
 * a consistent interface for accessing environment variables across
 * development, staging, and production environments.
 */

// Environment types
export type Environment = 'development' | 'staging' | 'production';

// Configuration interface
export interface EnvironmentConfig {
  apiUrl: string;
  databaseType: 'local' | 'remote';
  storagePrefix: string;
  enableAnalytics: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  features: {
    tourEnabled: boolean;
    editorEnabled: boolean;
    importExportEnabled: boolean;
    debugTools: boolean;
  };
}

// Determine current environment
export const getCurrentEnvironment = (): Environment => {
  // Check for environment variable (set in .env files)
  const envFromVar = import.meta.env.VITE_APP_ENV as Environment;
  if (envFromVar && ['development', 'staging', 'production'].includes(envFromVar)) {
    return envFromVar;
  }
  
  // Fallback based on URL
  const hostname = window.location.hostname;
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return 'development';
  } else if (hostname.includes('staging') || hostname.includes('test') || hostname.includes('dev')) {
    return 'staging';
  } else {
    return 'production';
  }
};

// Environment-specific configurations
const configs: Record<Environment, EnvironmentConfig> = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    databaseType: 'local',
    storagePrefix: 'blindtab_dev_',
    enableAnalytics: false,
    logLevel: 'debug',
    features: {
      tourEnabled: true,
      editorEnabled: true,
      importExportEnabled: true,
      debugTools: true
    }
  },
  staging: {
    apiUrl: 'https://staging-api.blindtab.app/api',
    databaseType: 'remote',
    storagePrefix: 'blindtab_staging_',
    enableAnalytics: true,
    logLevel: 'info',
    features: {
      tourEnabled: true,
      editorEnabled: true,
      importExportEnabled: true,
      debugTools: true
    }
  },
  production: {
    apiUrl: 'https://api.blindtab.app/api',
    databaseType: 'remote',
    storagePrefix: 'blindtab_',
    enableAnalytics: true,
    logLevel: 'error',
    features: {
      tourEnabled: true,
      editorEnabled: true,
      importExportEnabled: true,
      debugTools: false
    }
  }
};

// Get current environment configuration
export const getConfig = (): EnvironmentConfig => {
  const env = getCurrentEnvironment();
  console.log(`Running in ${env} environment`);
  return configs[env];
};

// Export the current environment and configuration
export const env = getCurrentEnvironment();
export const config = getConfig();

// Helper to check if we're in development
export const isDev = env === 'development';
// Helper to check if we're in staging
export const isStaging = env === 'staging';
// Helper to check if we're in production
export const isProd = env === 'production';

// Log the current environment on load (in development only)
if (isDev) {
  console.log('Environment:', env);
  console.log('Config:', config);
} 