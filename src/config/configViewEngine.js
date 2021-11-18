import express from "express";
const configViewEngine  = (app) => {
    app.use(express.static('./src/public'))//config file static
    app.set('views engine','ejs')
    app.set('views','./src/views')
}
export default configViewEngine