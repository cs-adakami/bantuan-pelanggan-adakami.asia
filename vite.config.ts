import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'copy-static-files',
      apply: 'build',
      closeBundle() {
        const files = ['logo.png', 'banner.png', 'sitemap.xml', 'robots.txt'];
        const distDir = 'dist';

        files.forEach((file) => {
          const srcPath = path.join(process.cwd(), file);
          const destPath = path.join(process.cwd(), distDir, file);

          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to dist/`);
          }
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
