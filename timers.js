var myMessage = document.getElementById("message");
function showMessage(){
	myMessage.className = "show";
}
setTimeout(showMessage, 3000); //3 seconds.  This is one timer method.  Timer used once.

var changecolor = document.getElementById("colorchanger");
var colors = ["red","blue","green","pink"];
var counter = 0;
function changingcolor(){
	if (counter >=colors.length) {
		counter = 0;
	}
	colorchanger.style.background=colors[counter];
	counter = counter + 1;
}
var stopTimer = setInterval(changingcolor, 3000);  //3 seconds.  Second timer method.  Used for image slider. Timer used many times.  Saved setInterval to variable stopTimer to give user option to stop.
colorchanger.onclick = function(){
	clearInterval(stopTimer);
	colorchanger.innerHTML = "Timer stopped";  //displays text Timer stopped inside color box when user stops color box
}