var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

    if (categoria == "/cerveja") {
        res.end("<html><body>Pagina da Cerveja</body></html>");
    } else if (categoria == "/bemestar") {
        res.end("<html><body>Apresentador Doidão</body></html>");
    }

    res.end("<html><body>Pagina de Teste</body></html>");
});

server.listen(3000);