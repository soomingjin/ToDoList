window.onload = addHeading;
window.onload = addElement;

//var heading = document.createElement("div");
//var node = document.createTextNode("Hello, World!");
//heading.appendChild(node);
//var body = document.getElementById("body");
//document.body.appendChild(heading);
function addHeading(){
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
}
function addElement () { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
//var elemDiv = document.createElement('div');
//elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
//document.body.appendChild(elemDiv);
//
//var para = document.createElement("p");
//var node = document.createTextNode("This is new.");
//para.appendChild(node);
//
//var element = document.getElementById("div");
//var child = document.getElementById("p1");
//element.insertBefore(para, child);