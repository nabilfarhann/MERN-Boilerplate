const express = require("express");
const router = express.Router();

// Put any function you want and use res.send();

// @route   POST /anything
// @desc    POST anything
router.post("/anything", async (req, res) => {
  async function test() {
    return new Promise(function (resolve, reject) {
      // Your operation
      const test = "test";
      resolve(test);
    });
  }

  async function run(){
      const retrievePost = req.body.data;
      var testArr = [];
      var data = [];
      for(test of testArr){
          const testloop = await test();
          data.push(testloop);
          console.log(testloop);
      }
      res.send(data);
      console.log("End");
  }

  run().catch(console.log);
});

module.exports = router;
