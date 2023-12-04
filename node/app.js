// # raw Node.Js, without Express

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello world (from Node!)");
});

server.listen(3000);


// -----------------------------------------------------------//

// const fs = require("fs").promises;

// const text = "This is a test - and it should be stored in a file!";

// fs.writeFile("node-message.txt", text).then(() => {
//     console.log("Wrote file!")    
// });