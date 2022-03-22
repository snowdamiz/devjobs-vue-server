require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { PORT, mongoURI } = require('./config')
const jobsRouter = require('./routes/api/jobs')

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use('/api/jobs', jobsRouter)
app.get('/', (req, res) => res.send('Working'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))