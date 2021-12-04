const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        docTitle: 'AddProduct',
        path: '/admin/add-product'

    })
}

const products = []
exports.postAddProduct = (req, res, next) => {
   // title, imageUrl, description, price
    const product = new Product(
        req.body.title,
        req.body.imageUrl,
        req.body.description,
        req.body.price);
    
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fecthAll((products) => {
        res.render('admin/products',
            {
                prods: products,
                docTitle: 'My products',
                path: '/admin/produt'
            })
    })
}