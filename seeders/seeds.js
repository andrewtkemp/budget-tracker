var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var postSeed = [
  {
    name: "Hyatt Regency",
    value: 500.00,
    date: new Date(Date.now())
  },
  {
    name: "Uber",
    value: 35.14,
    date: new Date(Date.now())
  },
  {
    name: "Fogo de Chao",
    value: 157.35,
    date: new Date(Date.now())
  }
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
