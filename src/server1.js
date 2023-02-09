
const express = require('express');
const ping = require('ping');

const app = express();
const ips = ['8.8.8.8', '10.50.2.126', '10.50.2.181','10.20.3.50'];

app.get('/ping', (req, res) => {
  Promise.all(ips.map(ip => ping.promise.probe(ip)))
    .then(responses => {
      const results = responses.map(r => ({
        ip: r.host,
        alive: r.alive
      }));
      res.json(results);
    });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
