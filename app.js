const express = require("express");
const cors = require("cors");
const app = express();
//------------controllers  import ------------------
const Projects = require("./Controllers/projectController.js");
const contactMe = require("./Controllers/contactMeControllers.js");
//------------controllers ^ import ------------------
app.use(cors());
app.use(express.json());
app.use("/projects", Projects);
app.use("/contactMe", contactMe);
app.get("/", (req, res) => {
  res.send("Portoflio project endpoint");
});
app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "Page Not Found" } });
});

module.exports = app;
