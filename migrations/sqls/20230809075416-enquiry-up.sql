create table enquiry (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name varchar(255) not null,
    email varchar(255) not null,
    message TEXT not null,
    enquiry_date DATE DEFAULT CURRENT_DATE 
)