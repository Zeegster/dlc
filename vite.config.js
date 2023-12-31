import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import path, { resolve } from 'path';
// https://vitejs.dev/config/

import { fileURLToPath } from 'url';

const __dirname= fileURLToPath(new URL('.',import.meta.url))
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    {
      name: 'replace-attributes',
      transformIndexHtml(html) {
        // Replace 'type="module" crossorigin' with 'defer' in <script> tags
        const scriptHtml = html.replace(
          /<script type="module" crossorigin/g,
          '<script defer'
        );
        // Replace 'crossorigin' in <link> tags
        const linkHtml = scriptHtml.replace(/crossorigin/g, '');
        return linkHtml;
      },
    },
  ],
  base: '',
  build: {
    
    minify: false,
    modulePreload: false,
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500,
    
  },
  resolve: {
  
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
});
