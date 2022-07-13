function login(){
	var user =document.getElementById('User').value;
	var pass =document.getElementById('pass').value;
	if (user=="777" && pass=="5") {
		var elem = document.createElement("img");
		elem.setAttribute("src", "https://www4.minijuegosgratis.com/v3/games/thumbnails/240546_1.jpg");
		document.getElementById("placehere").appendChild(elem);
		
	}
}	
