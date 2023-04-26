module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/' + process.env.CI_PROJECT_NAME + '/'
      : '/'
}