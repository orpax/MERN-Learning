module.exports = async (request) =>
  new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        resolve(body);
      });
    } catch (err) {
      reject(err);
      console.log(err);
    }
  });
