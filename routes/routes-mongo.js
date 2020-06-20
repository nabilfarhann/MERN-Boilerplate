const express = require("express");
const router = express.Router();

// Define Mongo Model
const Sample = require("../models/sample-model");

// @route   GET /getSample
// @desc    Get all sample
router.get("/getSample", async (req, res) => {
  Sample.find({})
    .then((sample) => {
      console.log(sample);
      res.json(sample);
    })
    .catch((err) => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   GET /getSample
// @desc    Get sample by id
router.get("/getSample/:id", async (req, res) => {
  Sample.findOne({ id: req.params.id })
    .then((sample) => {
      console.log(sample);
      res.json(sample);
    })
    .catch((err) => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   POST /addSample
// @desc    Add new Sample
router.post("/addSample", async (req, res) => {
  const newSample = new Sample({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    occupation: req.body.occupation,
  });

  const postSample = await newSample.save();
  res.json(postSample);
});

module.exports = router;
