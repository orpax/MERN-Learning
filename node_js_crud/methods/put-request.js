const requestBodyParser = require("../util/body-parser");
const writetoFile = require("../util/write_to_file");

module.exports = async (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
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
    return;
  }

  if (baseUrl === "/api/movies/") {
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
      return;
    }
    const updatedData = await requestBodyParser(req);

    req.movies[index] = { ...req.movies[index], ...updatedData, id };

    writetoFile(req.movies);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Success",
        message: `Movie with ID ${id} updated successfully`,
        status: "Success",
        timestamp: new Date().toISOString(),
      })
    );
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
