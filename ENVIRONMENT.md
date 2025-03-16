# BlindTab Environment Configuration

This document explains how the environment configuration works in BlindTab and how to use it for development, staging, and production environments.

## Environment Overview

BlindTab supports three environments:

1. **Development** - For local development
2. **Staging** - For testing before production
3. **Production** - The live application

## Environment Files

The environment configuration is managed through several `.env` files:

- `.env` - Base environment variables (shared across all environments)
- `.env.development` - Development-specific variables
- `.env.staging` - Staging-specific variables
- `.env.production` - Production-specific variables

## Running in Different Environments

### Development

```bash
# Run the development server
npm run dev

# Build for development
npm run build:dev

# Seed the development database
npm run seed
```

### Staging

```bash
# Run the staging server locally
npm run dev:staging

# Build for staging
npm run build:staging

# Seed the staging database
npm run seed:staging
```

### Production

```bash
# Build for production
npm run build

# Seed the production database
npm run seed:prod
```

## Environment Variables

The following environment variables are available:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_APP_ENV` | Current environment | `development`, `staging`, `production` |
| `VITE_API_URL` | API endpoint | `http://localhost:3000/api` |
| `DATABASE_URL` | Database connection string | `file:./dev.db` |
| `VITE_ENABLE_DEBUG_TOOLS` | Enable debug tools | `true`, `false` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics | `true`, `false` |
| `VITE_LOG_LEVEL` | Logging level | `debug`, `info`, `warn`, `error` |

## Using Environment Configuration in Code

The environment configuration is accessible through the `env.ts` utility:

```typescript
import { config, env, isDev, isStaging, isProd } from './utils/env';

// Check current environment
if (isDev) {
  console.log('Running in development mode');
}

// Access configuration
const apiUrl = config.apiUrl;
const isDebugEnabled = config.features.debugTools;

// Log based on environment
if (config.logLevel === 'debug') {
  console.debug('Debug message');
}
```

## Database Configuration

Each environment uses a different database:

- **Development**: SQLite database (`file:./dev.db`)
- **Staging**: PostgreSQL database on staging server
- **Production**: PostgreSQL database on production server

## Deployment

### Vercel Deployment

When deploying to Vercel, the environment is automatically detected based on the branch:

- `main` branch → Production
- `staging` branch → Staging
- Other branches → Development

### Environment Variables in Vercel

Set up the following environment variables in Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the variables from the appropriate `.env` file
4. Make sure to set `BLINDTAB_DB_PASSWORD` as a secret

## Edge Config Store

BlindTab uses Vercel Edge Config Store for runtime configuration:

1. Access Edge Config in code:
   ```typescript
   import { getConfig } from '@vercel/edge-config';
   
   const featureFlags = await getConfig('featureFlags');
   ```

2. Update Edge Config via Vercel CLI:
   ```bash
   vercel env pull
   ```

## Troubleshooting

If you encounter issues with environment configuration:

1. Check that you're using the correct `.env` file for your environment
2. Verify that all required environment variables are set
3. Restart the development server after changing environment variables
4. Clear browser cache if changes aren't reflected 