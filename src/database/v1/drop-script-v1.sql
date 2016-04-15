--DROP SCRIPT FOR V 0.0.1 OF THE APP
  
BEGIN TRANSACTION;
 
--DROP SEQUENCE IF EXISTS hacknight.projectId_seq; --should automatically drop
DROP TABLE IF EXISTS hacknight.project;

DROP SCHEMA IF EXISTS hacknight;

COMMIT;