const http = require('http')
const express = require('express')

const app = express();

app.use((req, res, next) => {

    console.log('Loading middleware')
    next(); //alows to work with another middle ware
})

app.use((req, res, next) => {

    console.log('Loading next middleware')
    res.send("<h1>Hello world from express</h1>")
  
})
const server = http.createServer(app);
server.listen(3000);

