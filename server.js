/**
 * Basic REST server built on Express.
 */
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (_req, res) {
  res.send("Hello, world!");
});

app.get("/foo", function (_req, res) {
  res.send({
    message: "Get foo",
  });
});

app.post("/foo", function (req, res) {
  res.status(201)
    .send({
      message: "Created a foo using data",
      data: req.body,
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
  res.status(400)
    .send({
      message: "Sample 400",
    });
});

app.get("/admin", function (_req, res) {
  res.sendStatus(401);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
