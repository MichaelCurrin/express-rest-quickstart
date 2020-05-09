const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", function (_req, res) {
  res.send("Hello, world!");
});

app.get("/foo", function (_req, res) {
  res.send({
    message: "Get foo",
  });
});

app.post("/foo", function (_req, res) {
  res.send({
    message: "Created a foo",
  });
});

app.delete("/foo", function (_req, res) {
  res.send({
    message: "Deleted a foo",
  });
});

app.get("/foo/:bar", function (req, res) {
  var bar = req.params.bar;

  res.send({
    message: `You requested Foo item: ${bar}`,
  });
});

app.get("/baz", function (_req, res) {
  res.status(400).send({
    message: "Sample 400",
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
