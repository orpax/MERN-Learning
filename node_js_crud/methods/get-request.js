module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexV4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (regexV4.test(id)) {
    const filteredMovies = req.movies.find((m) => m.id === id);
    res.setHeader("Content-Type", "application/json");

    if (filteredMovies) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filteredMovies));
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
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Not F]ound",
        message: "The requested resource was not found",
        status: "Failed",
        timestamp: new Date().toISOString(),
      })
    );
  }
};
