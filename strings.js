var myString = "I am a \"fun\" string";
document.write(myString); //prints I am a "fun" string
document.write("<br>");
document.write(myString.length); //prints 19
document.write("<br>");
document.write(myString.toUpperCase()); //prints I AM A "FUN" STRING
document.write("<br>");
document.write(myString.toLowerCase()); //prints i am a "fun" string
document.write("<br>");
document.write(myString.indexOf("string")); //prints 13
document.write("<br>");
document.write(myString.indexOf("ninja")); //prints -1.  Good for finding a string in a string with if statements.
document.write("<br>");
if (myString.indexOf("ninja") === -1){
	document.write("The word ninja is not in the string.");
}
else {
	document.write("The word ninja starts at position " +myString.indexOf("ninja"));
}
document.write("<br>");

var string1 = "abc";
var string2 = "bcd";
var string3 = "ABC";
document.write(string1 === string2);  //prints false
document.write("<br>");
document.write(string1 === string3.toLowerCase());  //prints true
document.write("<br>");
document.write(string1 < string2);  //prints true alphabetical order
document.write("<br>");

var slicestring1 = "hello, world";
var slicestring1sliced = slicestring1.slice(2,9);  //JavaScript is zero based
document.write(slicestring1sliced);  //prints llo, wo
document.write("<br>");
document.write(slicestring1.slice(2));  //prints llo, world

var tags = "meat, ham, salami, pork, beef, chicken"
document.write("<br>");
var tagsarray = tags.split(",");
document.write(tagsarray); //prints meat, ham, salami, pork, beef, chicken
document.write("<br>");

var myArray = [];
myArray[0] = 25;
document.write(myArray[0]);  //prints 25
document.write("<br>");
myArray[1] = 35;
document.write(myArray[1]);  //prints 35
document.write("<br>");
myArray[2] = true;
myArray[3] = "hello";
document.write(myArray);  //prints 25,35,true,hello
document.write("<br>");
myArray[2] = false;
document.write(myArray);  //prints 25,35,false,hello
document.write("<br>");
var myArray2 = [10, 20, "hi", false];
document.write(myArray2);  //prints 10,20,hi,false
document.write("<br>");
document.write(myArray2.length);  //prints 4
document.write("<br>");
document.write(myArray2.sort());  //prints 10,20,false,hi
document.write("<br>");
document.write(myArray2.reverse());  //prints hi,false,20,10
document.write("<br>");
var myArray3 = new Array();
var myArray4 = new Array(5);  //myArray4 is reserved for five values