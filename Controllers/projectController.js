const express = require("express");

const { getAllProjects, getOneProject } = require("../Queries/project");

const Project = express.Router();

Project.get("/", async (req, res) => {
  try {
    const allProject = await getAllProjects();
    res.status(200).json({ success: true, payload: allProject });
  } catch (err) {
    console.error("Error fetching all project CTL", err);
    res.status(500).json({ success: false, error: "error fetching internal" });
  }
});

module.exports = Project;
