
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pocketswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./pocketswap-sdk.cjs.development.js')
}
