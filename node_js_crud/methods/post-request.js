const crypto = require("crypto");
const requestBodyParser = require("../util/body-parser");
const { title } = require("process");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Movie Created",
          message: "Movie has been created successfully",
          status: "Success",
          timestamp: new Date().toISOString(),
        })
      );
    } catch (error) {
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
  }
};
