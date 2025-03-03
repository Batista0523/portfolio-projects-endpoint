const express = require("express");

const {
  getAllProjects,
  getOneProject,
  updateProjects,
  createProject,
  deleteProject,
} = require("../Queries/project");

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

Project.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneProject = await getOneProject(id);
    if (oneProject) {
      res.status(200).json({ success: true, payload: oneProject });
    } else {
      res.status(404).json({ success: false, error: "Page Not Found CTRL" });
    }
  } catch (err) {
    console.error("Error internal", err);
    res.status(500).json({ success: false, error: "Catch internal error" });
  }
});

Project.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await updateProjects(id, req.body);
    if (updatedProject) {
      res.status(200).json({ success: true, payload: updatedProject });
    } else {
      res.status(404).json({ success: false, error: "Page Not Found CTRL" });
    }
  } catch (err) {
    console.error("Internal Error updating the project", err);
    res.status(500).json({ success: false, error: "Catch Internal error" });
  }
});



module.exports = Project;
