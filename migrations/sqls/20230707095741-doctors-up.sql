create table doctors (
    id serial PRIMARY key,
    id_doctor int not null,
    name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    sex VARCHAR(255) not null,
    phone_no VARCHAR(255) not null,
    dob VARCHAR(255) not null,
    specialty VARCHAR(255) not null,
    CONSTRAINT fk_users FOREIGN KEY(id_doctor) REFERENCES users(id)
)