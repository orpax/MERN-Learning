const write_to_file = require("../util/write_to_file");

module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const writetoFile = require("../util/write_to_file");
  let id = req.url.split("/")[3];
  const regexV4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!regexV4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Bad Request",
        message: "Invalid ID format",
        status: "Failed",
        timestamp: new Date().toISOString(),
      })
    );
  } else if (baseUrl === "/api/movies/") {
    const index = req.movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Not Found",
          message: `Movie with ID ${id} not found`,
          status: "Failed",
          timestamp: new Date().toISOString(),
        })
      );
    } else {
      req.movies.splice(index, 1);
      write_to_file(req.movies);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Success",
          message: `Movie with ID ${id} deleted successfully`,
          status: "Deleted",
          timestamp: new Date().toISOString(),
        })
      );
    }
  }
};
