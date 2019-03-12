var fs = require('fs');
var SQL = require('sql.js');
var filebuffer = fs.readFileSync('db.sqlite');

// Load the db
var db = new SQL.Database(filebuffer);
