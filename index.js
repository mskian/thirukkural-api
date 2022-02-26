const express = require('express');
const cors = require('cors');
const fs = require('fs');
const apicache = require("apicache");

const app = express();
const port = process.env.PORT || 4001;
const cache = apicache.middleware

// CORS
var allowedOrigins = ['http://localhost:4001',
    'http://localhost:8080',
    'https://kural.surge.sh',
    'https://kural.surge.sh/',
    'https://kural.tamilwords.net/',
    'https://kural.tamilwords.net',
    'https://thirukkural.onrender.com/',
];
app.use(cors({
    origin: function(origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');

    fs.readFile('kural.json', function(err, buf) {
        var qarr = JSON.parse(buf);
        var random = qarr.kural[Math.floor(Math.random() * qarr.kural.length)];
        res.json(random);
    });
});

app.get('/:id', cache('1 hour'), (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');

    const getID = req.params.id
    fs.readFile('kural.json', function(err, buf) {
        var qarr = JSON.parse(buf);
        var kural_data  = qarr.kural.find(el => el.Number == getID);
        if (kural_data == undefined) {
            const random_data = Math.floor(Math.random() * 1000) + 1
            var kural_data  = qarr.kural.find(el => el.Number == random_data);
            res.json(kural_data);
        } else {
            res.json(kural_data);
        }
    });

});

app.use('/', cache('1 hour'), function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');

    fs.readFile('kural.json', function(err, buf) {
            var qarr = JSON.parse(buf);
            const random_data = Math.floor(Math.random() * 1000) + 1
            var kural_data  = qarr.kural.find(el => el.Number == random_data);
            res.status(200).json(kural_data);
    });
});

module.exports = app;
