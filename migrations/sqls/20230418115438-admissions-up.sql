CREATE TABLE admissions(
    id serial PRIMARY KEY,
    patients_id INT not null,
    admission_date VARCHAR(225) not null,
    discharged_date VARCHAR(225) not null,
    CONSTRAINT fk_patients_admission FOREIGN KEY(patients_id) REFERENCES patients(patients_id)
)