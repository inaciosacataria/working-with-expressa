const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        docTitle: 'AddProduct',
        path: '/admin/add-product'

    })
}

const products = []
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fecthAll((products) => {
        res.render('admin/products',
            {
                prods: products,
                imgUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1631738383/amc-cdn/production/2/movies/66900/66945/PosterDynamic/128342.jpg",
                //urlImages[Math.floor(Math.random() * urlImages.length)],
                docTitle: 'My products',
                //   hasProduct: products.length > 0,
                path: '/admin/produts'
            })
    })
}