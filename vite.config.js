// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import path from 'path'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  
  base:'./',
  plugins: [react(), viteSingleFile()],
  // build:{
  //   chunkSizeWarningLimit:2500,
  //   rollupOptions:{
  //     input:{
  //       main: resolve(__dirname, 'index.html'),
  //       module1: resolve(__dirname, 'module1/index.html'),
  //       module2: resolve(__dirname, 'module2/index.html'),
  //       module3: resolve(__dirname, 'module3/index.html'),
  //     }
  //   },
  // },
  // resolve:{
  //   alias:{
  //     'components':path.resolve(__dirname,'./src/components')
  //   }
  // }
})