// SERVER CODE
require("dotenv").config()
const express = require("express");
const http = require("http");

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(process.env.BASE, express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get(process.env.BASE, (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = server.listen(port, () => {
    console.log(`Server is listening on port ${listener.address().port}`);
});