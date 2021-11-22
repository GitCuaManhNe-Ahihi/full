import express from 'express'
import configViewEngine from './config/configViewEngine'
import path from 'path'
import { required } from 'nodemon/lib/config'
import initWebRouter from './route/initWebRouter'
import {connectDB} from './config/configSequeDB'

require('dotenv').config()
const app = express()


app.use(express.urlencoded({extends:true})) // lấy data từ phía client
app.use(express.json())
configViewEngine(app)
initWebRouter(app)
connectDB();
const port = process.env.PORT
app.listen(port,() => {
    console.log(`server run  http://localhost:${port}`)
})

