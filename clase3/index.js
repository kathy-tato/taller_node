var request = require('request');

var url = "https://jsonplaceholder.typicode.com"
var name = process.argv[2];

request(url+"/users", function(error, response, body){
	if (error) return console.log(error);
	var data = JSON.parse(body);
	for (var i =0; i < data.length; i++) {
		if (data[i].name == name){
			var user = data[i]
			break;
		}
	}
	//console.log(user);
	request(url+"/albums", function(error, response, body){
		if (error) return console.log(error);
		var data = JSON.parse(body);
		var album = []
		for (var i =0; i < data.length; i++) {
			if (data[i].userId == user.id){
				album.push(data[i])
				album[album.length-1].photos = []
			}
		}
		console.log(album);

		request(url+"/photos", function(error, response, body){
			if (error) return console.log(error);
			var data = JSON.parse(body);
			
			//for (var i =0; i < data.length; i++) {
			//	album["photos"] = []
			//	if (data[i].albumId == user.id){
			//		album.push(data[i])
					
			//	}
			//	album.save();
			//}
			//console.log(album)
		})
		//console.log(album)
	})
})



//user -> album -> fotos, promise= "bluebird"