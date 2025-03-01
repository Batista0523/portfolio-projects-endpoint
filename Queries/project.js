const db = require("../db/db.Config")

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
    console.error("Error fetching one project", err);
    throw err;
  }
};


module.exports= {
getAllProjects,
getOneProject
}