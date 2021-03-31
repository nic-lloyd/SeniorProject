var config = require('./config');
var express = require('express');
var app  = express();
var mysql = require('mysql');
var expRoute = express.Router();

var url = "https://api.yelp.com/v3/businesses/search"
const request = require('request');

/* Establish a connection to MySQL */
var conn = mysql.createConnection({
    host: "",
    sid: "",
    places: [],
    users: []
});

/* Connection error */
conn.connect((err) => {
    if(err) throw err;
    console.log("Connected to MySQL database");
})


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));

//app.use((req, res, next) => {
    /* Allow access from any requesting client */
//    res.setHeader('Access-Control-Allow-Origin', '*');

    /* Allo access for any of the following HTTP request types */
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

    /* Set the HTTP request header */
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

//    next();
//});

/** HTTP REQUESTS */
expRoute.get('/main/:businesses', (req, res) => {
    conn.query(`SELECT * FROM businesses`, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    })
})

expRoute.get('/joinSession/:sid', (req, res) => {
    conn.query(`SELECT * FROM sessions WHERE sid = ${req.body.sid}`, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    })
})

expRoute.post('/createSession', (req, res) => {
    conn.query(`INSERT INTO sessions sid VALUES ${req.body.sid}`, (error, result) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.use('/api', expRoute);

app.listen(config.port, () => {
    console.log("Server is running on port 8080");
});