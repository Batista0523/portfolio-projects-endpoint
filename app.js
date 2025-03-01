const express = require("express");
const cors = require("cors");
const app = express();
//------------controllers  import ------------------






//------------controllers ^ import ------------------
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portoflio project endpoint");
  });
  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "Page Not Found" } });
  });
  
  module.exports = app;
  