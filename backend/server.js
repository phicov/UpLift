const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/forums', require('./routes/forumRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))