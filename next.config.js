const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
  },
})
