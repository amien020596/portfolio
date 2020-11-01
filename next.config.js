const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// const withImages = require('next-images')

// module.exports = withImages({
//   inlineImageLimit: false,
//   webpack(config, options) {
//     return config
//   }
// })
module.exports = withCSS(withSass());