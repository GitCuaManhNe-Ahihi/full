import express from "express";
import homeController from '../controller/homeController'
const route = express.Router();
const initWebRouter  = (app) => {
    route.get('/',homeController.homeControl)
    return app.use('/',route)
}
export default initWebRouter