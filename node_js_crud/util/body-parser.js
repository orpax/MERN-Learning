module.exports = async (request) =>
  new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        const parsed = JSON.parse(body);
        resolve(parsed);
      });
    } catch (err) {
      reject(err);
      console.log(err);
    }
  });
