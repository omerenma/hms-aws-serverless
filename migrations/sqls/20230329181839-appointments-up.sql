CREATE TABLE appointments (
    id serial primary key,
    patient_name VARCHAR(225) NOT NULL,
    doctor_email VARCHAR(225) NOT NULL,
    date VARCHAR(200) NOT NULL,
    patient_email VARCHAR(200) NOT NULL,
    issent int DEFAULT 0 NOT NULL
)