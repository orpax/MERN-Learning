const path = require("path");

const filepath =
  "C:\\MERN\\MERN-Learning\\Node Js Error Handler\\files\\text.txt";

// const sampleFile = "sample.txt";

// console.log(path.join(path.dirname(filepath), sampleFile));

// dirname
// console.log(path.dirname(filepath));
// console.log(__dirname);

// Basename
// console.log(path.basename(filepath));
// console.log(__filename);

// Extentions
// console.log(path.extname(filepath));

// const pathFinal = path.join("C:", "MERN", "files", "sample.txt");
// console.log(pathFinal);

const fs = require("fs");
// console.log(fs);
const fsPromise = require("fs").promises;
// fs.readFile(filepath, (err, data) => {
//   if (err) throw new Error("Something Went Wrong!");
//   console.log(data);
// });

// try {
//   const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"));
//   console.log(data);
// } catch (err) {
//   console.log("Error!");
// }

// const filereading = async () => {
//   try {
//     const data = await fsPromise.readFile(filepath, { encoding: "utf-8" });
//     console.log(data);
//   } catch (err) {
//     console.log("Error!");
//   }
// };

// filereading();

const txtFile = path.join(__dirname, "files", "text.txt");
const content = "Halo Ini Data Nama Saya";

fs.writeFile(txtFile, content, "utf-8", (err) => {
  if (err) throw new Error("Something Went Wrong!");
  console.log("Write operation completed successfully!");
  fs.readFile(txtFile, "utf-8", (err, data) => {
    if (err) throw new Error("Something Went Wrong!");
    console.log(data);
  });
});
