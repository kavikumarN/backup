var fs = require('fs');
var sleep = require('sleep');
//*
var zmq = require('zeromq');

// socket to talk to server
console.log("Connecting to hello world server...");
var requester = zmq.socket('req');


requester.connect("tcp://localhost:5555");
 
var x = 0;
requester.on("message", function(reply) {
  console.log("Received reply", x, ": [", reply.toString(), ']');
  x += 1;
  if (x === 10) {
    requester.close();
    process.exit(0);


 
//*
var data = {}
data.artists = []
for (var i=0; i <26 ; i++){
	  console.log("Sending request", i, '...');
  requester.send("Hello");
   var obj = {
       artistname: "reply",
     

   }
   sleep.sleep(1)
   data.artists.push(obj)

fs.writeFile ("file.json", JSON.stringify(data), function(err) {
    if (err) throw err;
  //  console.log('complete');  
    }
);
}


 }
}); 


process.on('SIGINT', function() {
  requester.close();
});


// fs.writeFile ("file.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );
