var xhr = new XMLHttpRequest();
xhr.open('GET','/home/mat/emsdk/emscripten/incoming/12mar/db.db', true);
xhr.responseType = 'arraybuffer';

xhr.onload = e => {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  var contents =
   db.exec("SELECT * FROM test");
  sqlstr = "CREATE TABLE test (a int, b char);";
sqlstr += "INSERT INTO test VALUES (0, 'hello');"
sqlstr += "INSERT INTO test VALUES (1, 'world');"
db.run(sqlstr); // Run the query without returning anything
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
 while()
  console.log(contents);
};
xhr.send();
