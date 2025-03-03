const db = require("../db/db.Config");

const getAllProjects = async () => {
  try {
    const allProjects = await db.any("select * from projects");
    return allProjects;
  } catch (err) {
    console.error("Error fetching all projects QRY", err);
    throw err;
  }
};

const getOneProject = async (id) => {
  try {
    const oneProject = await db.one("SELECT * FROM projects WHERE id=$1 ", [
      id,
    ]);
    return oneProject;
  } catch (err) {
    console.error("Error fetching one project QRY", err);
    throw err;
  }
};

const updateProjects = async (id, project) => {
  try {
    const {
      title,
      image,
      description,
      production_link,
      github_repo_back,
      github_repo_front,
    } = project;
    const updatedProject = await db.one(
      "UPDATE projects SET title=$1, image=$2, description=$3, production_link=$4, github_repo_back=$5, github_repo_front=$6 WHERE id=$7 RETURNING *  ",
      [
        title,
        image,
        description,
        production_link,
        github_repo_back,
        github_repo_front,
        id,
      ]
    );
    return updatedProject;
  } catch (err) {
    console.error("Error updating project QRY", err);
    throw err;
  }
};

const createProject = async (project) => {
  try {
    const {
      title,
      image,
      description,
      production_link,
      github_repo_back,
      github_repo_front,
    } = project;
    const createdProject = await db.one(
      "INSERT INTO projects (title, image, description, production_link, github_repo_back, github_repo_front ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        title,
        image,
        description,
        production_link,
        github_repo_back,
        github_repo_front,
      ]
    );
    return createdProject;
  } catch (err) {
    console.error("Error creating project QRY", err);
    throw err;
  }
};

const deleteProject = async (id) => {
  try {
    const deletedProject = await db.one(
      "DELETE FROM projects WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedProject;
  } catch (err) {
    console.error("Error deleting project QRY", err);
    throw err;
  }
};

module.exports = {
  getAllProjects,
  getOneProject,
  updateProjects,
  createProject,
  deleteProject,
};
