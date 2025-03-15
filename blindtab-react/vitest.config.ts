/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    env: {
      VITE_APP_ENV: 'test',
      DATABASE_URL: "postgresql://blindtab-db_owner:npg_9ALt6mIzdneM@ep-ancient-art-a5wk9396-pooler.us-east-2.aws.neon.tech/blindtab-db?sslmode=require",
      DATABASE_URL_UNPOOLED: "postgresql://blindtab-db_owner:npg_9ALt6mIzdneM@ep-ancient-art-a5wk9396.us-east-2.aws.neon.tech/blindtab-db?sslmode=require"
    }
  },
}) 