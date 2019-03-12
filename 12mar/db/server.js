var xhr = new XMLHttpRequest();
xhr.open('GET', '/home/mat/emsdk/emscripten/incoming/12mar/db/db.sqlite', true);
xhr.responseType = 'arraybuffer';

xhr.onload = e => {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  // var contents = db.exec("SELECT * FROM hello");

sqlstr = "CREATE TABLE hello (a int, b char);";
//sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
//sqlstr += "INSERT INTO hello VALUES (1, 'world');"

db.run(sqlstr);

  var contents = db.exec("SELECT a,b FROM hello");
  //var contents = db.exec("INSERT INTO hello VALUES (0, 'hello')");
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
  console.log(contents);
};
xhr.send();
