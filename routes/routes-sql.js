const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Create connection to mysql
var config = require("../config/db.js");
var connection = config.databaseOptions;

// @route   GET /getData
// @desc    Get data from sql
router.get("/getData", async (req, res) => {
  connection.query("SELECT * from test", function (error, results) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });

  connection.end();
});

// @route   POST /insertData
// @desc    Insert data to sql
router.post("/insertData", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  let query = `INSERT INTO db SET name=?, age=?`;

  connection.query(query, [name, age], function (err, res) {
    if (err) throw err;
    console.log(res);
    res.send({ status: "Done!" });
  });
});

module.exports = router;
