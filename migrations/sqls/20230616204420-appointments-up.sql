CREATE TABLE appointments (
    id serial primary key,
    patient_id VARCHAR(225) NOT NULL,
    doctor_id VARCHAR(225) NOT NULL,
    appointment_date VARCHAR(200) NOT NULL
)