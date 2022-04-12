const http = require('http');

const listaDeMoedas = require('./moedas.json');

const app = http.createServer((req, res) => {
    // console.log(listaDeMoedas);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", 'application/json');
    res.write(JSON.stringify(listaDeMoedas));



    res.end();
})

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));