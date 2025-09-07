console.log("Hello World");

const fs = require("fs");

fs.readFile("node_js.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });

// console.log("Hello World");

// process.exit(0);

// // process.exitCode = 1;

// const a = require("lodash");

// const arr = [2, 4, 6, 8];
// console.log(a.indexOf(arr));

// const cowsay = require("cowsay");
// console.log(
//   cowsay.say({
//     text: "Saya Siap Menjadi Sepuh JS",
//     e: "00",
//     t: "a",
//   })
// );

const { data } = require("./car");
console.log(JSON.stringify(data, null, 2));
