const path = require("path");
const fs = require("fs");

const crypto = require("crypto");
const requestBodyParser = require("../util/body-parser");
const writetoFile = require("../util/write_to_file");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      const filepath = path.join(__dirname, "..", "data", "movies.json");
      const fileData = fs.readFileSync(filepath, "utf-8");
      const movies = JSON.parse(fileData);
      req.movies.push(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      writetoFile(req.movies);
      res.end(
        JSON.stringify({
          title: "Movie Created",
          message: "Movie has been created successfully",
          status: "Success",
          timestamp: new Date().toISOString(),
        })
      );
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Server Error",
          message: "An error occurred while processing your request",
          status: "Failed",
          timestamp: new Date().toISOString(),
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Not Found",
        message: "The requested resource was not found",
        status: "Failed",
        timestamp: new Date().toISOString(),
      })
    );
  }
};
