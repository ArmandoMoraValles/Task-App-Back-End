CREATE TABLE users (
    email VARCHAR(100) NOT NULL,
    key_password VARCHAR(100) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    nick_name VARCHAR(20) NOT NULL,
    user_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (user_id)
);

CREATE TABLE job_teams (
	team_name VARCHAR (20) NOT NULL,
    team_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (team_id)
);

CREATE TABLE users_job_teams (
	user_id int NOT NULL,
    team_id int NOT NULL,
    project_id int NOT NULL
);

ALTER TABLE users_job_teams
ADD CONSTRAINT fk_users_teams FOREIGN KEY (user_id) REFERENCES users (user_id),
ADD CONSTRAINT fk_teams_users FOREIGN KEY (team_id) REFERENCES job_teams (team_id),
ADD CONSTRAINT fk_users_teams_projects FOREIGN KEY (project_id) REFERENCES projects (project_id);

CREATE TABLE projects (
	project_name VARCHAR(20) NOT NULL,
    project_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (project_id)
);

CREATE TABLE tasks(
	descriptions VARCHAR(200) NOT NULL,
    start_date DATETIME NOT NULL,
    final_date DATETIME,
    task_id int NOT NULL AUTO_INCREMENT,
    project_id int,
    PRIMARY KEY (task_id)
);

ALTER TABLE tasks
ADD CONSTRAINT fk_project_tasks FOREIGN KEY (project_id) REFERENCES projects (project_id);

CREATE TABLE project_history(
	end_date DATETIME,
    start_date DATETIME NOT NULL,
    date_id int NOT NULL AUTO_INCREMENT,
    project_id int NOT NULL,
    PRIMARY KEY (date_id)
);

ALTER TABLE project_history
ADD CONSTRAINT fk_project_history FOREIGN KEY (project_id) REFERENCES projects (project_id);