console.log("Starting file operations...");
function asyncTask(cb) {
  console.log("Performing async task...");
  setTimeout(cb, 0);
}

asyncTask(() => console.log(task));
console.log("File operations will continue after async task...");
const task = "Completing file operations...";
  