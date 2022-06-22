CREATE TABLE CLASS (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    teacher_id VARCHAR(255) NOT NULL,
    student_id VARCHAR(255) NOT NULL,
    module INT NOT NULL
);

ALTER TABLE CLASS ADD (
    FOREIGN KEY (teacher_id) REFERENCES TEACHER(id),
    FOREIGN KEY (student_id) REFERENCES STUDENT(id)
);

-- STUDENTS:
CREATE TABLE STUDENT (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth DATE NOT NULL,
    class_id  VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES CLASS(id) 
);

CREATE TABLE STUDENT_HOBBY (
    id VARCHAR(255) PRIMARY KEY,
    student_id  VARCHAR(255) NOT NULL,        
    hobby_id  VARCHAR(255) NOT NULL,    
    FOREIGN KEY ( student_id ) REFERENCES STUDENT(id), 
    FOREIGN KEY ( hobby_id ) REFERENCES HOBBY(id)     
);

CREATE TABLE HOBBY (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE  
);

-- TEACHERS:
CREATE TABLE TEACHER (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birth DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES CLASS(id)
);

CREATE TABLE SPECIALTY (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL 
);

CREATE TABLE TEACHER_SPECIALTY (
    id VARCHAR(255) PRIMARY KEY,
    teacher_id VARCHAR(255) NOT NULL,
    specialty_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES TEACHER(id),
    FOREIGN KEY (specialty_id) REFERENCES SPECIALTY(id)
);
