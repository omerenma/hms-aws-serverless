CREATE TABLE subscription (
    id uuid DEFAULT uuid_generate_v4(),
    business_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    subscription_id BIGINT not null,
    amount integer not null,
    reference varchar(255) not null,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    subscription_status varchar(255) DEFAULT 'pending',
    start_at DATE DEFAULT CURRENT_DATE,
    end_at  DATE DEFAULT CURRENT_DATE + 30,
    expired boolean default 'false'
    )