import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: [
        // @emotion/babel-plugin is highly recommended,
        //  but not required in version 8 and above of Emotion.
        ['@emotion/babel-plugin', { sourceMap: true, autoLabel: "dev-only", labelFormat: '[local]' }]
      ]
    }
  })],
})
