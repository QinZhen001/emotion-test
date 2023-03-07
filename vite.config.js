import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: [
        ['@emotion/babel-plugin', { sourceMap: true, autoLabel: "dev-only", labelFormat: '[local]' }]
      ]
    }
  })],
})
