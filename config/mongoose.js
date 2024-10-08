const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://amanmourya1006:Paciano9165@cluster0.gvp0j.mongodb.net/`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the db"));

db.once("open", function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
