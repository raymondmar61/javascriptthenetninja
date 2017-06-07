//get elements by class name method <div class="content"></div>
//document.getElementsByClassName("content");
//33 Traversing the DOM
var myContentDivs = document.getElementsByClassName("content");

//get elements by tag name under class name
//myContentDivs.getElementsByTagName("h2");
//33 Traversing the DOM
var myH2 = myContentDivs[0].getElementsByTagName("h2");
myH2[1].innerHTML = "Yo Ninjas";  //changed Content Page to Yo Ninjas

//Notice singular Element and plural Elements.  How many HTML elements?

//uncomment to view JavaScript below in action
//34 Changing Page Content
// var myBody = document.getElementsByTagName("body");
// myBody[0].innerHTML = "<p> I am a paragraph tag.  I replace the entire HTML web page.</p>";

//Notice singular Element and plural Elements.  How many HTML elements?
//34 Changing Page Content
var myTitle = document.getElementById("page-title");
myTitle.textContent = "You Ninjas get ready to learn!" //changed Kung Fu Your Net Skills! to Yo Ninjas get ready to learn!

//35 Changing Element Attributes
var link = document.getElementById("test");
document.write(link.getAttribute("href"));  //prints /Subjects
document.write(" ");
document.write(link.getAttribute("class"));  //prints ninjas
link.setAttribute("class", "pie");
document.write("<br>");
document.write(link.getAttribute("class"));  //prints pie
link.setAttribute("alt", "links doesn't get alt, however, hello");
document.write(" ");
document.write(link.getAttribute("alt"));  //prints links doesn't get alt, however, hello
link.className = "ninja ninja"
document.write("<br>");
document.write(link.getAttribute("class"));  //prints ninja ninja
document.write("<br>");
document.write(link.href);  //prints file:///G:/Subjects
document.write("<br>");
document.write(link.style);  //prints [object CSSStyleDeclaration]

//36 Changing CSS Styles
var title = document.getElementById("page-title");
title.setAttribute("style","position:relative;");  //view in Chrome Console under Elements
//title.setAttribute("style","left: 10px;");  //view in Chrome Console under Elements
title.setAttribute("style","position:relative; left: 10px;");  //view in Chrome Console under Elements
title.style.left = "20px";
title.style.top = "10px";
title.style.color = "red";
//title.style.background-color = "blue";  ERROR can't use hyphens.
title.style.backgroundColor = "blue";  //view in Chrome Console under Elements

//37 Adding Elements to the DOM
var newli = document.createElement("li");  //view in Chrome Console under Elements
var newa = document.createElement("a");
var menu = document.getElementById("ulli").getElementsByTagName("ul")[0]
menu.appendChild(newli);
newli.appendChild(newa);
newa.innerHTML = "Here is the new li and a"
menu.insertBefore(newli, menu.getElementsByTagName("li")[0]);  //insert <li> first or on top of the others

//38 Removing Elements from the DOM  //view in Chrome Console under Elements
var parent = document.getElementById("ulli").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[2];
var deleted = parent.removeChild(child);  // deleted <li><a href="/Predicates" id="deletethislink" class="ninjas">Predicates</a></li>
parent.appendChild(deleted);  //if I want to undelete, type the code parent.appendChild(deleted); which is why parent.removeChild(child); saved in a variable