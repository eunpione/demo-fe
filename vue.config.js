const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  devServer: {
    proxy: {
      // '/api'로 시작하는 요청을 백엔드 서버로 프록시
      '/api': {
        target: process.env.VUE_APP_API_URL, // 여기에 백엔드 서버 주소 입력
        changeOrigin: true,              // cross-origin 허용
        secure: false,                   // https가 아닌 경우 false
        pathRewrite: { '^/api': '' }     // 필요에 따라 경로 재작성
      }
    }
  }
})
