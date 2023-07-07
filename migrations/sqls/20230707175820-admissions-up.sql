CREATE TABLE admissions(
    id serial PRIMARY KEY,
    patients_id INT not null,
    admission_date VARCHAR(225) not null,
    admission_room_number VARCHAR(255) NOT NULL,
    ailment VARCHAR(255) not null,
    CONSTRAINT fk_patients_admission FOREIGN KEY(patients_id) REFERENCES patients(id)
)