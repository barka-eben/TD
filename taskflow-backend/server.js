require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const taskRoutes = require('./routes/taskRoutes')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())


// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    console.log('✅ MongoDB connecté')

    app.listen(PORT, () => {

      console.log(`🚀 Serveur lancé sur le port ${PORT}`)

    })

  })
  .catch((error) => {

    console.error('❌ Erreur MongoDB :', error)

  })


// Route de test
app.get('/api/ping', (req, res) => {

  res.json({
    message: 'Serveur TaskFlow operationnel'
  })

})


// Routes tâches
app.use('/api/tasks', taskRoutes)