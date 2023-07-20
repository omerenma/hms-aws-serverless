CREATE TABLE businesses (
     id UUID not null PRIMARY KEY,
    CONSTRAINT fk_id FOREIGN KEY(id) REFERENCES subscription (id),
     first_name varchar(255) not null,
     last_name varchar(255) not null,
     email varchar(255) not null,
     password varchar(255) not null,
     phone varchar(255) not null,
     role varchar(255) DEFAULT 'admin' not null
    
 )