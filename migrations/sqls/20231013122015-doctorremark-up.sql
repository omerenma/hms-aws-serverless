create table doctorremarks (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    doctor_id uuid not null,
    name varchar(255) not null,
    email varchar(255) not null,
    message TEXT not null,
    phone_no VARCHAR(255) not null,
    enquiry_date DATE DEFAULT CURRENT_DATE 
)