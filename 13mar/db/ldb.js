const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('file.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write()



var zmq = require('zeromq');

// socket to talk to server
console.log("Connecting to hello world server...");
var requester = zmq.socket('req');

var x = 0;



requester.on("message", function(reply) {

	db.get('posts')
  .push({ key: x, value: reply.toString()})
  .write()

  console.log("Received reply", x, ": [", reply.toString(), ']');
  x += 1;
  if (x === 100) {
    requester.close();
    process.exit(0);
  }
});

requester.connect("tcp://localhost:5555");

// Add a post

db.get('posts')
  .push({ key: 1, value: 'kavi'})
  .write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()

for (var i = 0; i < 100; i++) {
  console.log("Sending request", i, '...');
  requester.send("Hello");
}
// Increment count
db.update('count', n => n + 1)
  .write()


process.on('SIGINT', function() {
  requester.close();
});


// 