import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path, { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// mock数据
import { viteMockServe } from 'vite-plugin-mock'

// svg icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// gizp压缩
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  // 公共基础路径
  base: './',
  // 构建相关
  build: {
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        // 静态资源分块打包处理
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 静态资源文件拆分 将比较大的静态资源 拆分成多个小文件
        manualChunks (id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  //  插件相关
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false // 禁用eslint缓存
    }),
    vueJsx({
      // 配置选项
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    viteMockServe({
      // mock配置
      mockPath: 'mock', // 解析，路径可根据实际变动
      localEnabled: true, // 开发环境
      prodEnabled: true, // 生产环境设为true，也可以根据官方文档格式
      injectCode:
      ` import { setupProdMockServer } from './mock';
        setupProdMockServer(); `,
      watchFiles: true, // 监听文件内容变更
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      injectFile: resolve('src/main.ts') // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
    }),
    // svg icon配置
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    // gzip
    viteCompression({
      // 是否在控制台输出压缩结果
      verbose: true,
      // 是否禁用
      disable: false,
      // 体积大于 threshold 才会被压缩,单位 b
      threshold: 10240,
      // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      algorithm: 'gzip',
      // 生成的压缩包后缀
      ext: '.gz'
    })
  ],
  //  配置别名 @
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  //  css相关
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    open: true // 自动打开浏览器
    // proxy代理
    // proxy: {
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
