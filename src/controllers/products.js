const ShowProducts = async (req, res) => {
    const title = "Products";
    res.render('Products',{title} )
    
}

export {ShowProducts}