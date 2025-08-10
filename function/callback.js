// console.log("Starting file operations...");
// function asyncTask(cb) {
//   console.log("Performing async task...");
//   setTimeout(cb, 0);
// }

// asyncTask(() => console.log(task));
// console.log("File operations will continue after async task...");
// const task = "Completing file operations...";

function asyncTask(cb) {
  setTimeout(() => {
    cb(null, "Async task completed");
  }, 0);
}

// asyncTask((err, result) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(result);
//     console.log("File operations will continue after async task...");
//   }
// });

// function makeApiCall(cb) {
//   setTimeout(() => {
//     console.log("API call completed");
//     cb();
//   }, 0);
// }

// makeApiCall(() => {
//   makeApiCall(() => {
//     asyncTask(() => {
//       asyncTask(() => {
//         asyncTask(() => {
//           asyncTask(() => {});
//         });
//       });
//     });
//   });
// });
