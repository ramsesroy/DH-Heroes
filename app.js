const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.sendFile(path.join(views, 'index.html'));
});
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(views, 'babbage.html'));
});
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(views, 'berners-lee.html'));
});
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(views, 'clarke.html'));
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(views, 'hamilton.html'));
});
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(views, 'hopper.html'));
});
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(views, 'lovelace.html'));
});
app.get('/turing', (req, res) => {
    res.sendFile(path.join(views, 'turing.html'));
});







app.listen(3030, console.log('Servidor corriendo exitosamente en el puerto '+ port));