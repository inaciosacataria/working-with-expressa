module.exports= (req, res, next) => {
    res.status(404).render('404',
        { docTitle: 'Ejs is good' ,path:'/'});
}