var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

    if (categoria == '/cerveja')
        res.end("<html><body>Pagina da cerveja</body></html>")
    else if (categoria == '/bemstar')
        res.end("<html><body>Aoresentador doidão</body></html>")

    res.end("<html><body>Pagina de teste</body></html>")
})

console.log("Server listenig on port 3000")
server.listen(3000); 