var fs = require('fs');
var gzip = require('zlib').createGzip();
var stream = require('stream');

var reader = fs.createReadStream('package.json'); //Archivo a leer
var writer = fs.createWriteStream('prueba.txt')

var counter = 0;

/*reader.on('data', (dataChunk) => {
	console.log('DATA');
	writer.write(dataChunk.toString("utf8"));
	counter++;
});


reader.on('end', () =>{
	writer.end
	console.log(counter);
	console.log("FIN");
})*/

var rot13 = new stream.Transform;
rot13._write = function(data, encoding, done){
	//console.log(data.toString('utf8'));
	//var tarea = data.toString('utf8').toUpperCase();
	var string = data.toString('utf8')
	var final = "";
	for (var i = 0; i < string.length; i++) {
		var code = string[i].charCodeAt(0);
		if (code >= 97 && code <= 122){
			code = string[i].charCodeAt(0) - 97
			code = (code + 13) % 26;
			code = code + 97;
		}
		var res = String.fromCharCode(code);
		final = final.concat(res);
	}
	rot13.push(final);
	done();
}

process.stdin.pipe(rot13).pipe(writer);

//reader.pipe(gzip).pipe(writer);

//reader.pipe(writer);
//reader.pipe(process.stdout);