import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// Generate sitemap on build
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      apply: 'build',
      writeBundle() {
        try {
          execSync('npx ts-node scripts/generate-sitemap.ts', { stdio: 'inherit' })
        } catch (error) {
          console.error('Failed to generate sitemap:', error)
        }
      },
    },
  ],
})
