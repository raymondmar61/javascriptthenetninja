var youLikeMeat = true;
// if (youLikeMeat is true) writes Here is the meaty menu...
if (youLikeMeat) {
	document.write("Here is the meaty menu...");
}
document.write(" ");

var youLikeMeatEqualsFalse = false;
// if (youLikeMeatEqualsFalse is false) writes Here is the vegetable menu...
if (youLikeMeatEqualsFalse) {
	document.write("Here is the meaty menu...");
} else {
	document.write("Here is the vegetable menu...");
}
document.write(" ");

if (7 > 5) {
	document.write("this expression is true");
}
document.write(" ");

var myNum = 8000;
if (myNum == 10) {
	document.write("myNum is equal to 10");
} else {
	document.write("myNum is not equal to 10")
}
document.write("<br>");

var myAge = 29;
if (myAge > 30){
	document.write("You are over 30!");
} else if (myAge > 20) {
	document.write("You are over 20!"); //writes You are over 20!
} else if (myAge > 10) {
	document.write("You are over 10!");
} else {
	document.write("You are not over 10!")
}
document.write("<br>");

var isnumber = 5;
//var isnumber = "5";
if (isnumber === 5){
	document.write("isnumber equals five and is an integer");
} else {
	document.write("isnumber doesn't equal five and is not an integer");
}
document.write("<br>");

var myAgePartyAnd = 25;
if (myAgePartyAnd >= 18 && myAgePartyAnd <=30){
	document.write("You come come, you cool dude");
} else {
	document.write("You aint coming!");
}
document.write("<br>");

var myAgePartyOr = 35;
if (myAgePartyOr < 18 || myAgePartyOr > 30){
	document.write("You aint coming!");
} else {
	document.write("You come come, you cool dude");
}
document.write("<br>");