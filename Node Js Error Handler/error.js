// Error Object

// const error = new Error("Something Error!");

// // console.log(error.stack);
// console.log(error.message);

// throw new Error("Iam the Error!");

const { CustomError } = require("./CustomError");
throw new CustomError("This Is Da Error");
