

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

// binding submit button to enter key
function submitHandler(e){
    if(e.keyCode==13){
        document.getElementById("addElement").click();
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
