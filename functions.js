var globalvariableusefunction;

function getAverage (a,b) {
	var average = (a + b) / 2;
	document.write(average);
	document.write("<br>");
}
getAverage(2,4); //returns 3

function getAverageReturn (a,b) {
	var average = (a + b) / 2;	
	return average;
}
var myResult = getAverageReturn(2,4);
document.write(myResult); //returns 3.  myResult is a Global variable.
document.write("<br>");

//document.write(average);  //to return nothing because average is a local variable inside function getAverage(a,b)

function getAverageGlobal (c,d) {
	globalvariableusefunction = (c + d) / 2;
	document.write(globalvariableusefunction);
	document.write("<br>");
}
getAverageGlobal(6,10);  //returns 8
document.write("<br>");

document.write("Numbers.  There are many functions and constants of the Math object.");
document.write("<br>");
var a = 5;
var b = 5;
var c = "5";
document.write(a + b);  //writes 10
document.write("<br>");
document.write(a + c);  //writes 55
document.write("<br>");
var a = "7";
document.write(a + b);  //writes 75
document.write("<br>");
document.write(typeof(a + b));  //writes string
document.write("<br>");
document.write(Math.round(7.8)); //writes 8
document.write("<br>");
document.write(Math.round(7.2)); //writes 7
document.write("<br>");
document.write(Math.floor(7.8)); //writes 7
document.write("<br>");
document.write(Math.ceil(7.2)); //writes 8
document.write("<br>");
document.write(Math.max(7,4,9,8)); //writes 9
document.write("<br>");
document.write(Math.min(7,4,9,8)); //writes 4
document.write("<br>");
document.write(Math.PI); //writes 3.141592653589793
document.write("<br>");

var a = "apple";
var b = 5;
document.write(a * b); //writes NaN
document.write("<br>");
document.write(isNaN(a)) //writes true
document.write("<br>");
if (isNaN(a) == true) {
	document.write("That is not a number");
}
else {
	document.write("Meaning of life is " + (a * b));
}