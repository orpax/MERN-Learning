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
// const fetch = require("node-fetch");

// const promise = new Promise((resolve, reject) => {
//   fetch("http://localhost:5173/")
//     .then((res) => res.json())
//     .then((data) => resolve(data))
//     .catch((err) => reject(err));
// });

// promise
//   .then((data) => console.log("Hasil : ", JSON.stringify(data, null, 2)))
//   .catch((err) => console.log("Error : ", err.message || err));

// Exception Synchronous

// function bagi(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Tidak Bisa dibagi dengan 0");
//     }
//     return a / b;
//   } catch (error) {
//     console.error("Terjadi Error: ", error.message);
//     return null;
//   }
// }

// console.log(bagi(10, 2));
// console.log(bagi(2, 0));

async function ambilData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Data: ", data);
  } catch (err) {
    console.error("Terjadi Error: ", err.message);
  }
}

ambilData();
