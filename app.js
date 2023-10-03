const express = require('express');
const cors = require('cors');

const ApiError  = require("./app/api-error");
const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resources not found"));
})

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  })
})

app.get("/",(req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;