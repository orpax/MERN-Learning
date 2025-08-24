module.exports = (req, res) => {
  if (req.url === "/api/movies") {
    try {
      console.log(req.body);
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
