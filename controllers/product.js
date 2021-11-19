exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        docTitle: 'AddProduct',
        path: '/admin/add-product'
       
    })
}

const products = []
exports.postAddProduct = (req, res, next) => {
    products.push({ 'title': req.body.title })
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {

     
    // const VIEW_URL = path.join(rootDir, 'views', 'shop.html');
    //  res.sendFile(VIEW_URL)
   
    let hasProduct = products.length > 0 ? true : false;

    res.render('shop',
        {
            prods: products,
            imgUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1631738383/amc-cdn/production/2/movies/66900/66945/PosterDynamic/128342.jpg",
            //urlImages[Math.floor(Math.random() * urlImages.length)],
            docTitle: 'Shop',
            hasProduct: products.length > 0,
            path: '/'
        })
}