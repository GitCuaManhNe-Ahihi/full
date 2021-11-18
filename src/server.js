import express from 'express'
import configViewEngine from './config/configViewEngine'
import path from 'path'
import { required } from 'nodemon/lib/config'
import initWebRouter from './route/initWebRouter'

require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extends:true})) // lấy data từ phía client
app.use(express.json())

configViewEngine(app)

initWebRouter(app)

app.listen(port,() => {
    console.log(`server run  http://localhost:${port}`)
})

