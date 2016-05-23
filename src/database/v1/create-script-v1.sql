--CREATE SCRIPT FOR V 0.0.1 OF THE APP
BEGIN TRANSACTION;

CREATE SCHEMA IF NOT EXISTS hacknight;

CREATE SEQUENCE hacknight.projects_id_seq START WITH 1000;
CREATE TABLE hacknight.projects (
    project_id INTEGER PRIMARY KEY DEFAULT nextval('hacknight.projects_id_seq'),
    creation_date TIMESTAMP DEFAULT current_timestamp,
    primary_contact TEXT NOT NULL,
    project_name TEXT NOT NULL,
    resources TEXT,
    code_monkeys TEXT,
    description TEXT
);
ALTER SEQUENCE hacknight.projects_id_seq OWNED BY hacknight.projects.project_id;

COMMIT;