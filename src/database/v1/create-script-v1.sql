--CREATE SCRIPT FOR V 0.0.1 OF THE APP
BEGIN TRANSACTION;

CREATE SCHEMA IF NOT EXISTS hacknight;

CREATE SEQUENCE hacknight.project_id_seq START WITH 1000;
CREATE TABLE hacknight.project (
    project_id INTEGER PRIMARY KEY DEFAULT nextval('hacknight.project_id_seq'),
    creation_date TIMESTAMP DEFAULT current_timestamp,
    main_contact_name TEXT NOT NULL,
    project_name TEXT NOT NULL,
    resources TEXT,
    code_monkeys TEXT,
    description TEXT
);
ALTER SEQUENCE hacknight.project_id_seq OWNED BY hacknight.project.project_id;

COMMIT;