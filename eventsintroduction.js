var title = document.getElementById("page-title");
title.onclick = function(){
	alert("you clicked me better");
}; //anonymous function.  No name to the function.  Don't need a name.  Assign a function to the onclick event.  Must have a semicolon at the end.  NetNinja taught the anonymous function
title.onmouseover = function(){
	alert("you hovered your mouse over me ;)");
};

//ejmedia taught the function
function eventonmouseover(){
	alert("mouseover");
}
function eventonclick(){
	alert("you clicked me super");
}
function changecolor(){
	var text = document.getElementById("red").style.color = "yellow";
	var text = document.getElementById("red").style.backgroundColor = "red";
	var text = document.getElementById("red").style.fontStyle = "italic";
	document.getElementById("blue").style.color="blue";
	document.getElementById("green").style.color="green";
}