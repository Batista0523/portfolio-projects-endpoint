\c portfolio_projects_endpoint 



DROP TABLE IF EXISTS projects;



CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    image TEXT,
    description VARCHAR,
    production_link VARCHAR,
    github_repo_back VARCHAR,
    github_repo_front VARCHAR,
);