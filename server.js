if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const imageRouter = require('./routes/images')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open',() => console.log('Connected to Mongoose'))


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', indexRouter)
app.use('/images', imageRouter)

app.listen(process.env.PORT || 3000)
