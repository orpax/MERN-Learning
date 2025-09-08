// Kita akan mempelajari

// Aplication-level Middleware
// Router-level Middleware
// Built-in Middleware
// Third-party Middleware
// Error-handling Middleware

const express = require("express");

const app = express();

const port = 5001;

// Const logger

const LoggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- Request [${req.method}] [${req.url}] `);
  next();
};

app.use(LoggerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
