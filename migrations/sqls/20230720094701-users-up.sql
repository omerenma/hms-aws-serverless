CREATE TABLE users (
     id UUID not null,
    CONSTRAINT fk_id FOREIGN KEY(id) REFERENCES businesses (id),
    user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
     first_name varchar(255) not null,
     last_name varchar(255) not null,
     email varchar(255) not null,
     password varchar(255) not null,
     phone varchar(255) not null,
     role varchar(255) DEFAULT 'admin' not null
    
 )