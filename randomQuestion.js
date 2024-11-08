function generateRandom() {
	var num=Math.ceil(Math.random()*3);
	var p = document.getElementById('textQuestion');
	switch(num){
		case 1:
			p.textContent = "1";
		break;
		case 2:
			p.textContent = "2";
		break;
		case 3:
			p.textContent = "3";
		break;
	}
}