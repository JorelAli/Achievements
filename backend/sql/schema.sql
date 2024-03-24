DROP TABLE Users;
CREATE TABLE Users(
    id INT PRIMARY KEY,
    username VARCHAR
);



DROP TABLE Collections;
CREATE TABLE Collections(
    id INT PRIMARY KEY,
    FOREIGN KEY (owner_id) REFERENCES Users(id),
    ENUM('PUBLIC','FRIENDS','PRIVATE'),
    title VARCHAR,
    description VARCHAR,
    tag VARCHAR
);

DROP TABLE Achievements;
CREATE TABLE Achievements(
    id INT PRIMARY KEY,
    title VARCHAR,
    icon_url VARCHAR,
    description VARCHAR,
    emoji VARCHAR,
    tag VARCHAR,
    score INT,
    FOREIGN KEY (parent_achievement_id) REFERENCES Achievements(id), 
    FOREIGN KEY (collection_id) REFERENCES Collections(id)
);

DROP TABLE UserAchievments;
CREATE TABLE UserAchievments(
    id INT PRIMARY KEY,
    FOREIGN KEY (acheivement_id) REFERENCES Achievements(id),
    FOREIGN KEY (collection_id) REFERENCES Collections(id),
    completion_date DATE
);

DROP TABLE UserCollections;
CREATE TABLE UserCollections(
    id INT PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (collection_id) REFERENCES Collections(id)
);

DROP TABLE FriendRelationships;
CREATE TABLE FriendRelationships(
    id INT PRIMARY KEY,
    FOREIGN KEY (user_1_id) REFERENCES Users(id),
    FOREIGN KEY (user_2_id) REFERENCES Users(id)
);