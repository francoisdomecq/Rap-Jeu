const express = require('express')
const mongoose = require('mongoose')
const connect = require('./connect')

const CrossFeaturingRoutes = require('./routes/CrossFeaturing')
const EnchereRoutes = require('./routes/Enchere')
const MythoPasMythoRoutes = require('./routes/MythoPasMytho')
const RapGenieOuGenantRoutes = require('./routes/RapGenieOuGenant')
const NomEquipeRoutes = require('./routes/NomEquipe')
const RappeurRoutes = require('./routes/Rappeur')
const Top5Routes = require('./routes/Top5')
const Top5 = require('./models/Top5')

const app = express()

//Middleware pour gérer le système de sécurité CORS qui bloque les appels HTTP entre des serveurs différents.
app.use((req, res, next) => {
  //Permet d'accéder à l'API depuis n'importe quel origine
  res.setHeader('Access-Control-Allow-Origin', '*')

  //Ajoute les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  //Permet d'envoyer des requêtes
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(express.json())

//Permet d'utiliser les routes que l'on a créé pour effectuer des appels vers l'API
app.use('/api/crossfeaturing', CrossFeaturingRoutes)
app.use('/api/enchere', EnchereRoutes)
app.use('/api/nomequipe', NomEquipeRoutes)
app.use('/api/rappeur', RappeurRoutes)
app.use('/api/mythopasmytho', MythoPasMythoRoutes)
app.use('/api/rapgenieougenant', RapGenieOuGenantRoutes)
app.use('/api/top5', Top5Routes)

module.exports = app
