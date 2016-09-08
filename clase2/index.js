const fs = require('fs');

//Ejercicio 1 escribir en archivo
fs.writeFile('users1.json', '[]', (err) => {
  if (err) throw err;
  console.log("Guardó");
});

//Ejercicio 2 leer de un archivo
var d = [];

fs.readFile('users.json', 'utf8',(err, data) => {
	if (err) throw err;
	d = JSON.parse(data);
	console.log(d);
});

//EJercicio 3 request por http
var url = "https://jsonplaceholder.typicode.com/comments"

var request = require('request');

function promedio(data) {
	return data.reduce((prev, next) => prev + next, 0) / data.length
};

request(url, function (error, response, body) {
	if (error) return console.log(error);
	var data = JSON.parse(body);
	var bodies_lengths = data.map(d => d.body.length);
	console.log("Promedio: " + promedio(bodies_lengths));
})

//const saludo = {
//	saludo: "Hola Mundo"
//}

//console.log(JSON.stringify(saludo));