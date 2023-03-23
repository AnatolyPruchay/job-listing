import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import linaria from '@linaria/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   minify: 'terser',
  // },
  plugins: [react(), linaria(), svgr()],
})
