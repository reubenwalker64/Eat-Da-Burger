/*Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.*/

// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.


var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

	//* `insertOne()` cols necessary???

  create: function(table, cols, name, cb) {
    var queryString = "INSERT INTO " + table;

    var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, cols, name], function(err, res) {

      if (err) {
        throw err;
      }

      cb(result);
    });
  },

	//* `updateOne()` ???
  // An example of objColVals would be {name: panther, sleepy: true}
  //CHANGE objColVals, condition, 
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    //???

      if (err) {
        throw err;
      }

      cb(result);
    }
  //WHY RED??? }  
  } 

// Export the orm object for the model (burgers.js).
module.exports = orm;
