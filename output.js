// const x = "1";
// const y = "2";

// console.log(x, y);

// %s format variable to string
// %d format for number
// %i format for integer part
// %o format for an object

// console.log("Halo nama saya %s dan umur saya %d", "Tio", 17);
// console.clear();

// console.count("Iam Tio");
// console.count("Iam Tio");
// console.count("Iam Tio");

// console.count("Iam Irong Man");

// console.countReset("Iam Tio");
// console.count("Iam Tio");

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

// console.clear();

// const sum = () => console.log(`The sum of 1 and 2 is: ${1 + 2}`);
// const multi = () => console.log(`The multiply of 1 and 2 is: ${1 * 2}`);

// const perhitunganWaktu = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");

//   console.time("multi()");
//   multi();
//   console.timeEnd("multi()");
// };

// perhitunganWaktu();

const ProgressBar = require("progress");
const chalk = require("chalk");

const bar = new ProgressBar("Downloading [:bar] :rate/bps :percent :etas", {
  total: 50,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
    console.log(chalk.green("This is Complete"));
  }
}, 100);
