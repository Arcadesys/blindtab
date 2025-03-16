#!/usr/bin/env node

/**
 * Environment Setup Script for BlindTab
 * 
 * This script helps set up the environment configuration for BlindTab.
 * It creates the necessary .env files and configures the environment
 * based on the selected environment (development, staging, production).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Environment templates
const envTemplates = {
  development: `# Development Environment Configuration

# Environment
VITE_APP_ENV=development

# API Configuration
VITE_API_URL=http://localhost:3000/api

# Database Configuration
DATABASE_URL="file:./dev.db"

# Feature Flags
VITE_ENABLE_DEBUG_TOOLS=true
VITE_ENABLE_ANALYTICS=false

# Logging
VITE_LOG_LEVEL=debug`,

  staging: `# Staging Environment Configuration

# Environment
VITE_APP_ENV=staging

# API Configuration
VITE_API_URL=https://staging-api.blindtab.app/api

# Database Configuration
DATABASE_URL="postgresql://blindtab:${process.env.BLINDTAB_DB_PASSWORD || 'password'}@staging-db.blindtab.app:5432/blindtab_staging?schema=public"

# Feature Flags
VITE_ENABLE_DEBUG_TOOLS=true
VITE_ENABLE_ANALYTICS=true

# Logging
VITE_LOG_LEVEL=info`,

  production: `# Production Environment Configuration

# Environment
VITE_APP_ENV=production

# API Configuration
VITE_API_URL=https://api.blindtab.app/api

# Database Configuration
DATABASE_URL="postgresql://blindtab:${process.env.BLINDTAB_DB_PASSWORD || 'password'}@db.blindtab.app:5432/blindtab_production?schema=public"

# Feature Flags
VITE_ENABLE_DEBUG_TOOLS=false
VITE_ENABLE_ANALYTICS=true

# Logging
VITE_LOG_LEVEL=error`
};

// Function to create .env file
function createEnvFile(environment) {
  const envPath = path.join(rootDir, `.env.${environment}`);
  fs.writeFileSync(envPath, envTemplates[environment]);
  console.log(`Created ${envPath}`);
}

// Function to create all .env files
function createAllEnvFiles() {
  Object.keys(envTemplates).forEach(env => {
    createEnvFile(env);
  });
  
  // Create base .env file that points to development by default
  const basePath = path.join(rootDir, '.env');
  fs.writeFileSync(basePath, `# Base Environment Configuration
# This file points to the development environment by default

VITE_APP_ENV=development
`);
  console.log(`Created ${basePath}`);
}

// Main function
function main() {
  console.log('BlindTab Environment Setup');
  console.log('==========================');
  console.log('');
  console.log('This script will help you set up the environment configuration for BlindTab.');
  console.log('');
  
  rl.question('Which environment do you want to set up? (development, staging, production, all) [all]: ', (answer) => {
    const env = answer.trim().toLowerCase() || 'all';
    
    if (env === 'all') {
      createAllEnvFiles();
      console.log('');
      console.log('All environment files created successfully!');
    } else if (['development', 'staging', 'production'].includes(env)) {
      createEnvFile(env);
      console.log('');
      console.log(`Environment file for ${env} created successfully!`);
    } else {
      console.error('Invalid environment. Please choose development, staging, production, or all.');
    }
    
    console.log('');
    console.log('Next steps:');
    console.log('1. Review the created .env files and update any values as needed');
    console.log('2. For staging and production, set the BLINDTAB_DB_PASSWORD environment variable');
    console.log('3. Run the application with the appropriate environment:');
    console.log('   - Development: npm run dev');
    console.log('   - Staging: npm run dev:staging');
    console.log('   - Production: npm run build');
    
    rl.close();
  });
}

// Run the main function
main(); 