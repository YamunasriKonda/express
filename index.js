const express = require("express");

const app = express();

const routes = require("./solutions/router");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/route", routes);

app.listen(2019);
