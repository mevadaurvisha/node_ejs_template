const express = require('express');
const router = require('./routers/router');
const path = require('path');
const server = express();
const port = 3008;

server.set("view engine" , "ejs");
server.set("views" , path.join(__dirname, "/views/dist"));

server.use(express.static(path.join(__dirname, "views/dist")));


server.use("/" , router);

server.listen(port , (err) => {
    if(!err){
        console.log(`Server is running on http://localhost:${port}`);
    }
})