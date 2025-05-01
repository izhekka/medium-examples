create table users (
    id serial primary key,
    first_name text not null,
    last_name text not null,
    created_at timestamp default now()
);
