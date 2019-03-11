var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");

//get help with "/" addresses!!!

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//EDIT BELOW ???
router.post("/", function(req, res) {
  console.log(req.body.name);

  if(req.body.name !== "") {
  burger.create(req.body.name, function(){
    res.redirect("/");
  });
}
});

//EDIT BELOW ???
router.put("/:id", function(req, res) {
  console.log(req.params.id);

  burger.update(req.params.id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
