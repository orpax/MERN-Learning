// const readLine = require("readline");
const prompt = require("prompt-sync")();

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`What Is Your Name? `, (name) => {
//   console.log(`Hello ${name}`);
//   rl.close();
// });

const Name = prompt("Masukan Nama Anda: ");

console.log(`Hai ${Name}`);
