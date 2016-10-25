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

var promesa = myRequest(api + 'users')
	.then(function(body){
		console.log(body);
	})
	.catch(function(err){
		console.error("Hubo un error", err);
	})