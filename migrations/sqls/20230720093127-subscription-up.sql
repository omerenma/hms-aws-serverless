CREATE TABLE subscription (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    subscription_id integer not null,
    amount integer not null,
    reference varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    subscription_status varchar(255) DEFAULT 'pending' not null,
    start_at Date,
    end_at date,
    expired boolean default false,
    cancel boolean
)