create table business (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    role varchar(255) DEFAULT 'admin',
    address text not null,
    password varchar(255) not null,
    verify boolean DEFAULT false
)