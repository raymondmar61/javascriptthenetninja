//alert("Hello World!");

/*
alert("Hello World!"); mult-line comments
*/

document.write("Hello World!");
document.write("<br>");

var myVariableRaymond;
myVariableRaymond = 10;
document.write(myVariableRaymond);  //writes 10
document.write(" ");
var myVar2 = "hello ";
document.write(myVar2); //writes hello 
var myVar2 = "hello again ";
document.write(myVar2); //writes hello again 
var myVar2 = 5;
document.write(myVar2); //writes 5
document.write("<br>");

var myVar = 10;
document.write(myVar + myVar +" ");  //writes 20
document.write(myVar + myVar ," ");  //writes 20
document.write((myVar*5) + 8 + " ");  //writes 58
document.write(30 / 3 + " ");  //writes 10
document.write(myVar +=5 , " ");  //writes 15
var myVar = 10;
document.write(myVar +=5 + " ");  //writes 105 treats as concatenation
var myVar = 10;
document.write(myVar +=1 , " "); //writes 11
var myVar = 10;
document.write(myVar++, " ");  //writes 10, 10 is incorrect answer
document.write(myVar)  //writes 11, 11 is correct answer
var myVar = 10;
document.write(++myVar, " ");  //writes 11, 11 is correct answer, I wanted 11
document.write(myVar)  //writes 11, 11 is correct answer
document.write("<br>")

var namevariable = "Raymond";
document.write(namevariable);
document.write("<br>")

var iLikeMeat = true;
document.write(iLikeMeat); //writes true
var iLikeEggplant = false;
document.write(iLikeEggplant);  //writes false
document.write(7 < 5); //writes false
document.write(7 == 7); //writes true
document.write(Boolean(7 > 5)) //writes true;
document.write(Boolean(0)) //writes false;
document.write(Boolean("")) //writes false;
