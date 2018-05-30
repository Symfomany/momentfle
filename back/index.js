const express = require("express");
const app = express();
const moment = require("moment-timezone");
moment.tz.setDefault("Europe/Paris");

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/date", function(req, res) {
  res.json([
    moment().format(),
    moment("2013-06-08 09:30").format(),
    moment("2013-02-18 19:30").format(),
    moment("2013-01-18 23:59").format(),
    moment("2013-03-28 13:59").format(),
    moment("2013-01-01 00:02").format()
  ]);
});

app.listen(4000, function() {
  console.log("Example app listening on port 3000!");
});
