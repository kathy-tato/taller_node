var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = [];
var current_id = 1;

app.get('/users', (req, res) => {
	res.json(users);
	res.end();
});

app.post('/users', (req, res) => {
	var usuario_nuevo = {
		id: current_id++,
		username: req.params.username,
		email: req.body.email
	}
	users.push(usuario_nuevo);
	res.json(req.body);
	//res.json(usuario_nuevo);
	res.end();

});

app.delete('/users', (req, res) => {
	var id = req.body.id;
});

/*app.update('/users', (req, res) => {
	var usuario = {
		id: current_id++,
		username: req.body,
		email: req.body
	}
	users.push(usuario);
	res.json(usuario);
});*/

app.listen(1313, () => {
	console.log('Servidor arriba');
});