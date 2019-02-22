create database bamazon;
use database bamazon;

create table products (
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price decimal(4,2),
    stock_quantity varchar(100) not null,
)

    insert into products (product_name, department_name, price, stock_quantity)
    values  ("Bronco Hat", "Hats", 24.99, 4);
            ('Nuggets Hat', 'Hats', 12.95, 0);
            ('Broncos Sweatshirt', 'Apparell', 49.95, 2);
            ('Broncos T-Shirt', 'Apparel', 22.99, 5);
            ('Nuggets T-Shirt', 'Apparel', 12.50, 3);
            ('Rockies Poster', 'Home and Office', '6.95', 4);
            ('Rockies Hat', 'Hats', 32.00, 6);
            ('Broncos Clock', 'Home and Office', 12.95, 3);
            ('Avalanche Towel', 'Bed and Bath', 9.98, 2);
            ('Avalanche Sheets', 'Bed and Bath', 16.99, 2);

