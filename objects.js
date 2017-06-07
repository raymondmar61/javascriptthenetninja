// var myCar = new Car();
// document.write(myCar.length)  //property
// document.write(myCar.maxspeed())  //method

// var myString = new String();
// myString = "hello";
// //myString;
// document.write(myString);
// //myString.length
// document.write(myString.length);
// document.write(myString.toLowerCase());

// var myString2 = "hi there";
// myString2.toUpperCase();
// document.write(myString2.toUpperCase());

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = "Shaun";
// myCar.drive = function(){ document.write("now driving");};
// document.write(myCar.driver());
// myCar.drive();

//var myCar2 = {maxSpeed: 50, driver: "Shaun", drive: function (){ document.write("now driving");} };  properties and methods in their own line easier to read
var myCar2 = {maxSpeed: 50,
			  driver: "Shaun",
			  drive: function (speed, time){ document.write(speed * time);},
			  test0: function() { document.write(this);},
			  test: function() { console.log(this);},
			  logDriver: function() {document.write("driver name is " + this.driver);}

};
document.write(myCar2.maxSpeed);  //prints 50
document.write("<br>")
myCar2.drive(50, 3);  //returns 150
document.write("<br>")
myCar2.test0();  //returns document.write(this) [object Object]
myCar2.test();  //returns console.log(this); in Chrome Developer tab Console
document.write("<br>")
myCar2.logDriver();  //returns driver name is Shaun.  Shaun comes from this.driver or myCar2.driver
document.write("<p>")

//Constructor Function
var Car2 = function(maxSpeed, driver){
	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function (speed, time){ document.write(speed * time);
	};
	this.logDriver = function(){ document.write("driver name is " + this.driver);
	};
}
var myCar1 = new Car2(70, "ninja man");
var myCar2 = new Car2(40, "Humpty Dumpty");
var myCar3 = new Car2(10, "Shaun");
var myCar4 = new Car2(90, "James Bond");
myCar1.drive(60,2);  //returns 120
document.write("<br>")
myCar4.logDriver();  //returns driver name is James Bond
document.write("<p>")

var myDate = new Date();
document.write(myDate);  //returns current date in format-->Wed Jan 11 2017 20:01:55 GMT-0800 (Pacific Standard Time)
var myPastDate = new Date(1545, 11, 2, 23, 30, 15);  //year, month Jan is 0 Dec is 11, day, hours 0-23, minutes 0-59, seconds 0-59
document.write("<br>")
document.write(myPastDate);
var myFutureDate = new Date(2515, 0, 31, 0, 0, 31);  //year, month Jan is 0 Dec is 11, day, hours 0-23, minutes 0-59, seconds 0-59
document.write("<br>")
document.write(myFutureDate);
var birthday = new Date(1985, 0, 15, 11, 15, 25);
document.write("<br>")
document.write(birthday.getMonth());  //returns 0
document.write("<br>")
document.write(birthday.getFullYear());  //returns 1985
document.write("<br>")
document.write(birthday.getDate());  //returns 15
document.write("<br>")
document.write(birthday.getDay());  //returns 2 0 is Sun, 6 is Sat
document.write("<br>")
document.write(birthday.getHours());  //returns 11 0 is 12am 23 is 11pm
document.write("<br>")
document.write(birthday.getTime());  //returns 474664525000 number of miliseconds since 01/01/70
document.write("<br>")
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);
if (birthday == birthday2){
	document.write("birthdays are equal");
	document.write("<br>")
} else {
	document.write("birthdays are not equal");
	document.write("<br>")
}
if (birthday.getTime() == birthday2.getTime()){
	document.write("birthdays are equal");
	document.write("<br>")
} else {
	document.write("birthdays are not equal");
	document.write("<br>")
}