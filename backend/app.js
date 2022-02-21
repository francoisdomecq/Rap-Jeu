const express = require('express')
const mongoose = require('mongoose')
const connect = require('./connect')

const CrossFeaturingRoutes = require('./routes/CrossFeaturing')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(express.json())

app.use('/api/crossfeaturing', CrossFeaturingRoutes)

module.exports = app
