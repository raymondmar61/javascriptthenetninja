function setUpEvents(){
	var content = document.getElementById("content");
	var button = document.getElementById("showmore");
	button.onclick = function(){
		if(content.className == "open"){
			//shrink the box
			content.className = "";
			button.innerHTML = "Show More";
		} else {
			//expand the box
			content.className = "open";
			button.innerHTML = "Show Less";
		}
	};
}

//41 Window onLoad Event
window.onload = function(){
	//I could copy all the js inside the function
	//var content = document.getElementById("content");
// 	var button = document.getElementById("showmore");
// 	button.onclick = function(){
// 	if(content.className == "open"){
// 		//shrink the box
// 		content.className = "";
// 		button.innerHTML = "Show More";
// 	} else {
// 		//expand the box
// 		content.className = "open";
// 		button.innerHTML = "Show Less";
// 	}
// };

	//Instructor creates another function setUpEvents() and places JavaScript inside setUpEvents()
	setUpEvents();
};