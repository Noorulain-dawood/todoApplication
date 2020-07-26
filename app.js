var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var forDate = document.getElementById('datefun');
var dateElement = document.createElement('h1');
var date_text = document.createTextNode(date);
dateElement.appendChild(date_text);
forDate.appendChild(dateElement);

var list = document.getElementById("list");
function addTodo(){
  var listItem = document.getElementById("todo-items");

  var li = document.createElement("li");

  var textLi = document.createTextNode(listItem.value);
   li.appendChild(textLi);
   //create delete btn
   var btndel = document.createElement('button');
   var del_text = document.createTextNode("DELETE");
   btndel.setAttribute("class","delBtn");
   btndel.setAttribute("onclick","delete_items(this)")
   btndel.appendChild(del_text);
   li.appendChild(btndel);

   //edit button
   var editBtn = document.createElement('button');
   var editText = document.createTextNode("Edit");
   editBtn.appendChild(editText);
   editBtn.setAttribute("class","editBtn");
   editBtn.setAttribute("onclick","edit_items(this)")
   li.appendChild(editBtn);

   list.appendChild(li);

  listItem.value = " ";
}

//delete function
function delete_items(e){
  e.parentNode.remove();
}

//delete All
function deleteAll(){
  list.remove();
}

//edit edit_items
function edit_items(e){
  var val = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("Enter to edit",val);
  e.parentNode.firstChild.nodeValue = editValue;
}
