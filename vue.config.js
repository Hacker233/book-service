module.exports = {
  baseUrl: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/book-service/'
    : '/'
}