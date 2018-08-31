module.exports = (app) => {

    app.get('/cadastrar', (req, res) => {
        res.render('admin/form_add_prod')
    })

}