// Error Object

// const error = new Error("Something Error!");

// // console.log(error.stack);
// console.log(error.message);

// throw new Error("Iam the Error!");

// const { CustomError } = require("./CustomError");
// throw new CustomError("This Is Da Error");

// handel exception using try and catch

// try {
//   doSomething();
// } catch (e) {
//   console.log("Error Occured!");
//   console.log(e);
// }

// const { reject } = require("lodash");
const fetch = require("node-fetch");

// // function doSomething() {
//   const data = fetch("http://localhost:3000/api");
//   console.log("Ini Adalah Error function!");
// }

// unchaught exception
// process.on("uncaughtException", (err) => {
//   console.log("Ini adalah Error Yang Uncaught");
//   process.exit(1);
// });

// Exceptions with promise

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Terjadi Error");
// //     console.log(err);
//   });

const promise = new Promise((resolve, reject) => {
  fetch("http://localhost:5173/")
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});

promise
  .then((data) => console.log("Hasil : ", JSON.stringify(data, null, 2)))
  .catch((err) => console.log("Error : ", err.message || err));
