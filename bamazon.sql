CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
    ID INTEGER AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(4,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ID)
);

select * from Products;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES  ("Broncos Hat","Hats",24.99,10),
        ("Nuggets Hat","Hats",12.95,8),
        ("Broncos Sweatshirt","Apparel",49.95,5),
        ("Broncos T-Shirt","Apparel",22.99,12),
        ("Nuggets T-Shirt","Apparel",12.50,1),
        ("Rockies Poster","Home and Office",6.95,5),
        ("Rockies Hat","Hats",32.00,6),
        ("Broncos Clock","Home and Office",121.95,3),
        ("Avalanche Towel","Bed and Bath",9.98,5),
        ("Avalanche Sheets","Bed and Bath",16.99,2);