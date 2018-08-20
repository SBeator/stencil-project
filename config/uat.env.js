'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  BASE_URL: '"https://uat.paircity.com/v1/admin/"'
})
