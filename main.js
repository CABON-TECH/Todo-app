var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
let deleteMe = document.querySelectorAll('ul');
//form subimt event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);
//add item function
function addItem(e) {
   
   
   //new input value
   var newItem = document.getElementById('item').value;

   //creating new list elements
   var li = document.createElement('li');

   //adding the class
   li.className = 'list-group-item';
   //creating the delete button element
   var deleteBtn = document.createElement('button');

   //adding classes to  deleteBtn
   deleteBtn.className = 'fa-solid fa-square-xmark delete';

e.preventDefault();

//new input value
var newItem = document.getElementById('item').value;
//creating new list elements
var li = document.createElement('li');
//adding the class
li.className = 'list-group-item';
//adding a text node with the input value
li.appendChild(document.createTextNode(newItem));
//creating the delete button element
    var deleteBtn = document.createElement('li');
//adding classes to  deleteBtn
    deleteBtn.className = 'fa-solid fa-square-xmark delete';
    li.appendChild(deleteBtn)
//appending the button to the li
    li.appendChild(deleteBtn);
    //appending li to list
    itemList.appendChild(li);
}

//removing item
function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure to delete?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}
//filter items
function filterItems(e) {
    //changing character to lowercase
    var text = e.target.value.toLowerCase();

    //getting the list
    var items = itemList.getElementsByTagName('li');

    //converting to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })

    


    
}
