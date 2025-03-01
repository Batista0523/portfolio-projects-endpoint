\c portfolio_projects_endpoint;



-- Insert test projects
INSERT INTO projects (title, image, description, production_link, github_repo_back, github_repo_front) 
VALUES 
(
    'Portfolio Website', 
    '/uploads/portfolio.png', 
    'A personal portfolio website showcasing my work.', 
    'https://myportfolio.com', 
    'https://github.com/myusername/portfolio-backend', 
    'https://github.com/myusername/portfolio-frontend'
),
(
    'Task Manager App', 
    '/uploads/task-manager.png', 
    'A web app to manage daily tasks with authentication.', 
    'https://taskmanager.com', 
    'https://github.com/myusername/task-manager-backend', 
    'https://github.com/myusername/task-manager-frontend'
),
(
    'E-commerce Website', 
    '/uploads/ecommerce.png', 
    'A full-stack e-commerce platform with Stripe integration.', 
    'https://mystore.com', 
    'https://github.com/myusername/ecommerce-backend', 
    'https://github.com/myusername/ecommerce-frontend'
);
