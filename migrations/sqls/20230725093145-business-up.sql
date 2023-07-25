
CREATE TABLE business (
     id uuid,
     first_name varchar(255) not null,
     last_name varchar(255) not null,
     email varchar(255) not null,
     constraint fk_id foreign key (id) references subscription(business_id),
     password varchar(255) not null,
     phone varchar(255) not null,
     role varchar(255) DEFAULT 'admin' not null
 )