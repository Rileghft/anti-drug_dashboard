USE hackthon_data;
DROP TABLE IF EXISTS datalist;
CREATE TABLE datalist (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	title VARCHAR(50) NOT NULL,
	provider VARCHAR(100) DEFAULT 'unknown',
	description TEXT NOT NULL,
	dataType VARCHAR(10) NOT NULL,
	dateFrom INT,
	dateUnit VARCHAR(10) NOT NULL,
	fee VARCHAR(5) NOT NULL,
	PRIMARY KEY (id, name)
);

INSERT INTO `datalist` 
(name, title, provider, description, dataType, dateFrom, dateUnit, fee)
VALUES("drugCriminal", "毒品案件辦理情", "法務部統計處", "法務部毒品案件辦理情況統計表", "json", 88, "民國", "free");