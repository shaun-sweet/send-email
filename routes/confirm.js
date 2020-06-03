const express = require("express");
var router = express.Router();

router.post("/confirm", (req, res) => {
  console.log(req.body);
  //will do some database related stuff using req.body data
});

module.exports = router;
