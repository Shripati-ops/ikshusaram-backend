const express = require('express');
const app = express();
let routeIndex = require('./Routers/RouterIndex');

app.use('/',routeIndex);

app.listen(5000, ()=> {
    console.log("App Listening on port 5000");
})
