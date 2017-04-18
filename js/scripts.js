//window.onload = addHeading;
//window.onload = fun;
//var heading = document.createElement("div");
//var node = document.createTextNode("Hello, World!");
//heading.appendChild(node);
//var body = document.getElementById("body");
//document.body.appendChild(heading);
function addHeading(){
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
}
function fun () { 
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

// binding submit button to enter key
function submitHandler(e){
    if(e.keyCode==13){
        document.getElementById("addElement").click();
    }
}

// Create a new list item when clicking on the "Add" button
function addElement() {
var close = document.getElementsByClassName("close");
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("toDoList").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // X symbol
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function checkedTaskHandler(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
}

window.onload = function(){
    var submit = document.getElementById("input");
    console.log(submit);
    submit.addEventListener("keypress", submitHandler, false);
    
    
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', checkedTaskHandler, false);
    
}
