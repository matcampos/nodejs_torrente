var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).send('<html><body>Página inicial</body></html>')
});


app.get('/fiap', function (req, res) {
    res.status(200).send('<html><body>Página fiap</body></html>')
});


app.get('/mba', function (req, res) {
    res.status(200).send('<html><body>Página mba</body></html>')
});

// Com o listen, subimos o servidor atravéz de dois parâmetros

app.listen(3000, function () {
    console.log('Servidor está ativo com Express!');
});

app.get('/tabuada', (req, res) => {
    let retorno = "<html>";
    for (var i = 1; i <= 10; i++) {
        for (var y = 1; y <= 10; y++) {
            let tab = y;
            let calc = tab * i;
            retorno += `<a> ${tab} * ${i} = ${calc}</a> <br>`;
            tab++;
        }
        retorno += ' <br>';
    }

    retorno += "<html>"

    res.send(retorno);
})
