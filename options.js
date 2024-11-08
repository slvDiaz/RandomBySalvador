function optionsRdb() {
	var orden = document.getElementById('orden');
	var random = document.getElementById('random');
	if (orden.checked) {
		location.href = "ordenQuestion.html";
	}
	if (random.checked) {
		location.href = "https://www.youtube.com/watch?v=7h2ryr_uUEs";
	}
	if (orden.checked == false && random.checked == false) {
		alert("Selecciona una opcion!");
	}
}

function changeColor(rdb) {
	if (rdb===1) {
		document.getElementById('lblOrden').style.backgroundColor= '#fff';
		document.getElementById('lblRandom').style.backgroundColor= '#fbe9db';
	}
	else{
		document.getElementById('lblRandom').style.backgroundColor= '#fff';
		document.getElementById('lblOrden').style.backgroundColor= '#fbe9db';
	}
}
