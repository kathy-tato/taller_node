var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./lib/db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
Promesa
*/

const request = require ('request');
const api = 'https://jsonplaceholder.typicode.com/';
const Promise = require('bluebird');

function myRequest(url){
	return new Promise(function(resolve, reject){
		request(url, function(err, response, body){
			if(err){
				return reject(err);
			}
			resolve(JSON.parse(body));
		})
	});
}

/*
Axios
*/

const axios = require('axios');
const API = 'https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';

app.get('/guardar-hora', (req, res) => {
	axios.get(API)
	  .then(function (response) {
	  	year = response.data.year;
	  	month = response.data.month;
	  	day = response.data.day;
	  	hours = response.data.hours;
	  	minutes = response.data.minutes;
	  	seconds = response.data.seconds;
	  	var date = {
	  		hora: year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
	  	};
	  	db.Time.create(date)
	  		.then( (new_user) => {
            	res.json(date);
            	res.end();
        	})
        	.catch( (err) => {
            	res.json(err);
        	});
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
});

/*
Mocha y chai in test/
*/

const fibonacci = require('./lib/fib.js');

app.get('/fibonacci/:n', (req, res) => {

	var valor = Number(req.params.n);

    var result = {};
    result['fibonacci-'+valor] = fibonacci.fib(valor);

    res.json(result);
    res.end();
});

db.sequelize.sync({force: true}).then(function () {
    app.listen(9000, () => {
        console.log('Servidor arriba en el puerto 9000');
    });
});