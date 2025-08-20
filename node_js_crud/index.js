const http = require("http");
// require("dotenv").config();

const port = process.env.PORT || 3001;
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");

let movies = require("./data/movies.json");

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested resource was not found",
          status: "Failed",
          timestamp: new Date().toISOString(),
        })
      );
      res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
