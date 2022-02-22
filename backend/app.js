const express = require('express')
const mongoose = require('mongoose')
const connect = require('./connect')

const CrossFeaturingRoutes = require('./routes/CrossFeaturing')
const EnchereRoutes = require('./routes/Enchere')
//const MythoPasMythoRoutes = require('./routes/MythoPasMytho') Régler problème des fichiers
//const RapGenieOuGenantRoutes = require('./routes/RapGenieOuGenant') Régler problème des fichiers
const NomEquipeRoutes = require('./routes/NomEquipe')
const RappeurRoutes = require('./routes/Rappeur')

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
app.use('/api/enchere', EnchereRoutes)
app.use('/api/nomequipe', NomEquipeRoutes)
app.use('/api/rappeur', RappeurRoutes)
//app.use('/api/mythopasmytho', MythoPasMythoRoutes)
//app.use('/api/rapgenieougenant', RapGenieOuGenantRoutes)

module.exports = app
