module.exports = function (app) {
    app.get('/', function (req, res) {
        app.app.controllers.home.mostrar_home(req, res);
    });
}