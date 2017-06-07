var age = 5;
while (age < 10){
	//console.log("Your age is less than 10"); run the code in Chrome Development Console tab
	document.write("You're while loop age is " + age);
	document.write("<br>");
	age++;
}
document.write("You are now over 10 while loop");
document.write("<p>");

for (age = 5; age < 10; age++){
	document.write("You're for loop age is " +age);
	document.write("<br>");
}
document.write("You are not over 10 for loop");
document.write("<p>");

var links =  document.getElementsByTagName("a"); //get all the links
for (i = 1; i <= links.length; i++){ //links.length is the count of links
	document.write("this is link number " + i);
	document.write("<br>");
}
document.write("All links now looped");
document.write("<p>");

for (i = 0; i < 10; i++){
	if (i === 3 || i === 5){
		document.write(i +" pretend is skipped");
		document.write("<br>");
		continue;
	}
	document.write(i);
	document.write("<br>");
	if (i === 7){
		break;
	}
}

var links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++){
	links[i].className = "links-" + i; //array.  Go to Chrome Developent Elements tab to see the className
}