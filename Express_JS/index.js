const express = require("express");
const data = require("./data/movies.json");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ message: "Home Pages" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About Pages" });
});

app.get("/products", (req, res) => {
  res.json({ message: "Products Pages" });
});

app.get("/products/:id/:title", (req, res) => {
  res.json({
    message: `Nomor product dengan kode ${req.params.id}, title: ${req.params.title}`,
  });
});

app.post("/products/", (req, res) => {
  res.json({ message: "Create Users" });
});

app.put("/products/:id", (req, res) => {
  res.json({ message: `Update Users with ID ${req.params.id}` });
});

app.delete("/products/:id", (req, res) => {
  res.json({ message: `Delete Users with ID ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
