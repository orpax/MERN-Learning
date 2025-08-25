const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  console.log("Writing data to file:", data); // Debugging line
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data, null, 2)
    );
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};
