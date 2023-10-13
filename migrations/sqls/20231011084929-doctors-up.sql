create table doctors (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id uuid,
    constraint fk_doctor foreign key(business_id) references business(id),
    name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    sex VARCHAR(255) not null,
    phone_no VARCHAR(255) not null,
    dob VARCHAR(255) not null,
    specialty VARCHAR(255) not null
    )