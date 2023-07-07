CREATE TABLE patients (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(225) NOT NULL,
    sex VARCHAR(225) NOT NULL,
    dob VARCHAR(225) NOT NULL,
    residential_address VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    phone_no VARCHAR(225) NOT NULL,
    next_of_kin_name VARCHAR(225) NOT NULL,
    next_of_kin_phone_no VARCHAR(225) not NULL,
    issent int DEFAULT 0 NOT NULL
)