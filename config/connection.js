// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.mysql://a4hmt6bb4q7skb4k:hjtfuo5rftp15epg@s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r6z0ept2lvch3euu) {
  connection = mysql.createConnection(process.env.mysql://a4hmt6bb4q7skb4k:hjtfuo5rftp15epg@s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r6z0ept2lvch3euu);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "punker64",
    database: "burgers_db"
  })
}
/*var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "punker64",
  database: "burgers_db"
});
*/
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
