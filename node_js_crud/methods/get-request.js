module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);

  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    "^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}" +
      "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$"
  );

  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Id Is Not Valid",
        message: "The requested resource was not found",
        status: "Failed",
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
