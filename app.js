let Express = require("express");

let app = Express();

app.use(Express.json());

app.get("/test", function (req, res) {
  console.log(req.body);
  res.send("Test GET endpoint success");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/static.html");
});

app.post("/test", function (req, res) {
  console.log(req.body);
  res.send("Test POST endpoint success");
});

app.listen(8080, function () {
  console.log("app is listening");
});
