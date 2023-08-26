create table patients (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    hospital_id uuid,
    name varchar(255) not null,
    sex varchar(255) not null,
    dob varchar(255) not null,
    residential_address varchar(255) not null,
    email varchar(255) not null,
    phone_no varchar(255) not null,
    next_of_kin_name varchar(255) not null,
    next_of_kin_phone varchar(255) not null,
    constraint fk_patients foreign key (hospital_id) references business(id)
)