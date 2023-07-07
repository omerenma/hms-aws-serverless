
   CREATE TABLE diagnosis (
    id serial primary key,
    treatment_name VARCHAR(500) NOT NULL,
    drug_administered VARCHAR(500) NOT NULL,
    doctor_name VARCHAR(200) NOT NULL,
    patient_email VARCHAR(200) NOT NULL,
    bill int NOT NULL,
    date VARCHAR(200) NOT NULL,
    paid VARCHAR (200) NOT NULL,
    description VARCHAR(500) NOT NULL,
    patient_status VARCHAR(500) NOT NULL,
    issent int DEFAULT 0 NOT NULL
)