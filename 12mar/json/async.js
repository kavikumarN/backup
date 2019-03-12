// Declare variables
var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('file.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    console.log(obj);
}
