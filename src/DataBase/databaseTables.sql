CREATE TABLE Brands (
    BrandId INT IDENTITY(1,1) PRIMARY KEY,
    BrandName NVARCHAR(100) NOT NULL
);

CREATE TABLE Categories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName NVARCHAR(50) NOT NULL,
    Description NVARCHAR(MAX)
);

CREATE TABLE Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryId INT,
    BrandId INT,
    ProductName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    ImageUrl NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId),
    FOREIGN KEY (BrandId) REFERENCES Brands(BrandId)
);

CREATE TABLE Sizes (
    SizeId INT IDENTITY(1,1) PRIMARY KEY,
	CategoryId INT,
    SizeName NVARCHAR(10) NOT NULL,
	FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId),
);

CREATE TABLE ProductSizes (
    ProductSizeId INT IDENTITY(1,1) PRIMARY KEY,
    ProductId INT,
    SizeId INT,
    Stock INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId),
    FOREIGN KEY (SizeId) REFERENCES Sizes(SizeId)
);