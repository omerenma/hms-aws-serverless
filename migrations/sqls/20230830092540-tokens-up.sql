create table tokens (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    token TEXT not null
    )