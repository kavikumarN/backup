var sql = require('sql.js');
var fs = require("fs");
//var sql = require('window.SQL'); 
//if you are in a browser

// Create a database
var db = new sql.Database();

// NOTE: You can also use new sql.Database(data) where
// data is an Uint8Array representing an SQLite database file

// Execute some sql
sqlstr = "CREATE TABLE hello (a int, b char);";
sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
sqlstr += "INSERT INTO hello VALUES (1, 'world');"

db.run(sqlstr); // Run the query without returning anything


// Prepare an sql statement
var stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");

// Bind values to the parameters and fetch the results of the query
var result = stmt.getAsObject({':aval' : 1, ':bval' : 'world'});
console.log(result); // Will print {a:1, b:'world'}

// Bind other values
stmt.bind([0, 'hello']);

while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

// You can also use javascript functions inside your SQL code

stmt.free();

// You can not use your statement anymore once it has been freed.
// But not freeing your statements causes memory leaks. You don't want that.
// Export the database to an Uint8Array containing the SQLite database file.

var binaryArray = db.export();
var buffer = new Buffer(binaryArray);
fs.writeFileSync("db.sqlite", buffer);
