CREATE TABLE categories (
    id serial PRIMARY KEY,
    category_name text
);

CREATE TABLE proteins (
    id serial PRIMARY KEY,
    protein_name text
);

CREATE TABLE entrees (
    id serial PRIMARY KEY,
    entree_name text,
    category integer REFERENCES categories (id),
    protein integer REFERENCES proteins (id),
    protein2 integer REFERENCES proteins (id)
);

CREATE TABLE sides (
    id serial PRIMARY KEY,
    side_name text,
    category integer REFERENCES categories (id)
);

CREATE TABLE veggies (
    id serial PRIMARY KEY,
    veggie_name text
);
