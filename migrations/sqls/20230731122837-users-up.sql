create table users (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id uuid,
    constraint fk_user foreign key(business_id) references business(id),
    name varchar(255) not null,
    email varchar(255) not null,
    role varchar(255) not null,
    password varchar(255) not null
)