// const promise = new Promise((resolve, rejects) => {
//   console.log("Starting promise...");
//   if (Math.random() >= 0.5) {
//     const data = { message: "Hello, World!" };
//     resolve(data);
//   } else {
//     const error = { errorCode: "404" };
//     rejects(error);
//   }
// });

// const { reject, set } = require("lodash");

// promise.then(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// function asyncTask() {
//   return Promise.resolve("Async task completed");
// }

// asyncTask().then(() => console.log(name));
// const name = "Tio";

// const p = Promise.resolve("failed");

// p.then((val) => {
//   console.log(val);
//   return "Next value";
// })
//   .then((val) => {
//     console.log(val);
//     return "Another value";
//   })
//   .then((val) => console.log(val))
//   .catch((val) => console.log(val));

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("API call completed " + time);
    }, time);
  });
};

// makeApiCall(1000).then((val) => {
//   console.log(val);
// });

let multipleApiCalls = [
  makeApiCall(1000),
  makeApiCall(2000),
  makeApiCall(3000),
];

Promise.all(multipleApiCalls).then((val) => {
  console.log(val);
});

Promise.race(multipleApiCalls).then((val) => {
  console.log(val);
});
