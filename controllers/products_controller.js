const Product = require('../models/product');

// Function to show all the products
module.exports.products = function(req, res) {
    Product.find({}, function(err, foundProducts) {
        if (err) {
            res.send({data: {error: err}});
        } else {
            // Transform foundProducts to include a sequential ID
            const productsWithId = foundProducts.map((product, index) => ({
                id: index + 1, // Sequential ID starting from 1
                _id: product._id, // Keeping original MongoDB _id if needed
                name: product.name,
                quantity: product.quantity
            }));
            res.send({data: {products: productsWithId}});
        }
    });
};

// Function to create a new product
module.exports.create = function(req, res) {
    const newProduct = new Product({
        name: req.body.name,
        quantity: req.body.quantity
    });
    newProduct.save(function(err, product) {
        if (err) {
            res.send({data: {error: err}});
        } else {
            // Respond with the created product (without the sequential ID since it's generated on fetching)
            res.send({data: {message: 'New product added successfully.', product}});
        }
    });
};

// Function to delete a product using its ID
module.exports.delete = function(req, res) {
    Product.deleteOne({_id: req.params.productID}, function(err) {
        if (err) {
            res.send({data: {error: err}});
        } else {
            res.send({data: {message: "Product deleted"}});
        }
    });
};

// Function to update a product's quantity
module.exports.updateQuantity = function(req, res) {
    const ID = req.params.productID;
    Product.findById(ID, function(err, found) {
        if (err) {
            res.send({data: {error: err}});
        } else {
            const newQty = parseInt(found.quantity) + parseInt(req.query.number);
            Product.findByIdAndUpdate(ID, {quantity: newQty}, {new: true}, function(err, updatedProduct) {
                if (err) {
                    res.send({data: {error: err}});
                } else {
                    res.send({
                        data: {
                            product: updatedProduct,
                            message: 'Updated successfully'
                        }
                    });
                }
            });
        }
    });
};
