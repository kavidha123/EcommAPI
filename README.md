E-Commerce API Documentation
About
This E-commerce API is developed using Node.js and MongoDB. It provides endpoints to create, retrieve, update, and delete products in an e-commerce setting.

Getting Started
Prerequisites
Node.js installed
MongoDB installed and running
Postman for testing API endpoints
Installation
Clone the repository to your local machine.
Open the terminal in the project's directory.
Run npm init to set up the project dependencies.
Starting the Server
Start the server by running node app.js in the terminal.
Testing with Postman
To test the API, open Postman and follow the steps below for various operations.
Retrieve Products
Make a GET request to localhost:3000/products.
The list of products should be visible in the response.
Create a New Product
Ensure the server is running (node app.js).
In Postman, set the URL to localhost:3000/products/create.
Under the Body tab, select x-www-form-urlencoded.
Add name and quantity as keys and set their desired values.
Make a POST request.
If successful, you'll receive a message indicating the product was added successfully.
Verify the creation by making a GET request to localhost:3000/products.
Delete a Product
Copy the object ID of the product you wish to delete.
Append the ID to localhost:3000/products/ in the URL.
Make a DELETE request.
You should receive a message confirming the successful deletion.
Update Product Quantity
Copy the object ID of the product whose quantity you want to update.
Append the ID to localhost:3000/products/ in the URL.
Add /update_quantity/?number={x} to the URL, where {x} is the amount to adjust the quantity by.
The full URL should look like localhost:3000/products/{id}/update_quantity/?number={x}.
Make a POST request. You should receive a message detailing the updated product information.
Tech Stack
Backend: Node.js
Database: MongoDB
