USE hackthon_data;
DROP TABLE IF EXISTS dashboard;
CREATE TABLE dashboard (
	id INT NOT NULL AUTO_INCREMENT,
	userName VARCHAR(50) NOT NULL DEFAULT 'user',
	dataID INT NOT NULL,
	columns TEXT NOT NULL,
	`type` VARCHAR(10) NOT NULL,
	top INT NOT NULL DEFAULT 0,
	`left` INT NOT NULL DEFAULT 0,
	width INT NOT NULL DEFAULT 480,
	height INT NOT NULL DEFAULT 400,
	PRIMARY KEY (id, userName),
	FOREIGN KEY(dataID) REFERENCES datalist(id)
);

INSERT INTO `dashboard` 
(dataID, columns, `type`, top, `left`)
VALUES(1, '["year", "invest"]', 'bar', 0, 0);
