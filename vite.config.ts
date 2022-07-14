import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'DataV',
        replacement: path.resolve(__dirname, 'src/vendor/DataV/index.js')
      },
    ],
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()],
    }),
    // eslintPlugin()
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
      },
      scss: {

      }
    }
  }
})
