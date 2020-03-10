window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready?");
	clearScreen()
	addBox();
	timeStart();
	document.getElementById("start").onclick = null;
}

function timeStart(){

	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	function timeCount(){

		var allbox = document.querySelectorAll("#squares-layer box");
		document.getElementById("clock").innerHTML = second;
		second -=1;
		if(allbox.length === 0 && second > -2){
			
			clearInterval(timer);
			x.innerHTML = null;
			alert("Congratulation!!");
			pageLoad();
		}
		else if (allbox.length !== 0 && second <= -2){
			alert("You Failed!");
			clearInterval(timer);
			x.innerHTML = null
			clearScreen();
			pageLoad();

		}

	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox ;i++){
		var tempbox = document.createElement("box");
		tempbox.className = "square" ;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){

	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}


function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer box");
	for (var i=0;i<allbox.length;i++){

		allbox[i].parentNode.removeChild(allbox[i]);
		
	}
}




