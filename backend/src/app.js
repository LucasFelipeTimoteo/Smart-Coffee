const express = require('express')
const cors = require('cors')

const recipesRouter = require('./routes/recipesRouter')

const app = express()
app.use(cors())
app.use('/ingredients', recipesRouter)

module.exports = app