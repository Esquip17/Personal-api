const express = require("express");
const app = express();
const parser = require("body-parser");
const Country = require("./models");

app.use(parser.json());

app.get("/models", function(req, res) {
  Country.find({}).then(Country => {
    res.json(Country);
  });
});

app.get("/models/:id", function(req, res) {
  Country.findOne({ _id: req.params.id }).then(Country => {
    res.json(list);
  });
});

// app.get("/models/:id", function(req, res) {
//   List.findById(req.params.id).then(models => {
//     res.json(models);
//   });
// });

app.post("/models", function(req, res) {
  Country.create(req.body).then(Country => {
    res.json(list);
  });
});

app.post("/list/:id/item", function(req, res) {
  Country.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true }
  ).then(Country => {
    res.json(Country);
  });
});

app.listen(3000, () =>
  console.log("Is your server running? Better go catch it!")
);
