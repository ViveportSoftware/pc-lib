import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 45173,
    https: true,
  },
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'index',
      fileName: 'index'
    }
  },
  plugins: [
    mkcert(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
