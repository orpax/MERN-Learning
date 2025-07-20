const repl = require("repl");

const local = repl.start({
  prompt: "> ",
});

local.on("exit", () => {
  console.log("Exiting REPL...");
  process.exit(0);
});
