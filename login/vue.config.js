const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system"
    },
    devServer: {
      headers: {
        'Content-Security-Policy': 'connect-src https: localhost:* ws://localhost:* ws://192.168.15.8:*'
      }
    }
  },
})
