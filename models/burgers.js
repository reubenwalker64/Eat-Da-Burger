// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM. DONE I THINK
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //PROBLEM HERE???
  create: function(name, cb) {
    orm.create("burgers", name, cb, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb, function(res) {
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
