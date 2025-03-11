\c portfolio_projects_endpoint 



DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS contact_me;


CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    image TEXT,
    description VARCHAR,
    production_link VARCHAR,
    github_repo_back VARCHAR,
    github_repo_front VARCHAR
);

CREATE TABLE contact_me (
    id SERIAL PRIMARY KEY,
    username VARCHAR(33),
    email VARCHAR(50),
    msg VARCHAR(500)
);
