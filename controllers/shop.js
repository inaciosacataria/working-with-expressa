const Product= require('../models/product')

exports.getProduct = (req, res, next) => {
    const products = Product.fecthAll((products) => {
        res.render('shop/product-list',
            {
                prods: products,
                imgUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1631738383/amc-cdn/production/2/movies/66900/66945/PosterDynamic/128342.jpg",
                //urlImages[Math.floor(Math.random() * urlImages.length)],
                docTitle: 'All Products',
                //   hasProduct: products.length > 0,
                path: '/products'
            })
    })
   
}

exports.getIndex = (req, res, next) => {
    const products = Product.fecthAll((products) => {
        res.render('shop/index',
            {
                prods: products,
                imgUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1631738383/amc-cdn/production/2/movies/66900/66945/PosterDynamic/128342.jpg",
                //urlImages[Math.floor(Math.random() * urlImages.length)],
                docTitle: 'Shop',
                //   hasProduct: products.length > 0,
                path: '/'
            })
    })
}

exports.getCart = (req, res, next)=>{
    res.render('shop/cart', {
        prods: products,
        path: '/cart',
        docTitle: 'Your cart'
        
    })
}

exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout', {
        prods: products,
        path: '/checkout',
        docTitle: 'Checkout'
    })
}


