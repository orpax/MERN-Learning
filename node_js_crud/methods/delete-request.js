const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../data/movies.json"),
    JSON.stringify(data)
  );
};
