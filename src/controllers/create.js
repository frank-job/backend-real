const ShowCreate = async (req, res) => {
    const title = "create";
    res.render('create', {title})
    
}

export {ShowCreate}