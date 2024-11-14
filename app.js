const bodyParser = require("body-parser");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

require("./database");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const scraper = require('./api/scraper.js')
app.use("/api/scraper", scraper);

const port = process.env.PORT || 5000;

server.listen(port, async () => {
  console.log(`Server started on port ${port}`);
});