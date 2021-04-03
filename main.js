const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  e.preventDefault();
  // get input value
  const newItem = document.getElementById('item').value;
  // create new li element
  const li = document.createElement('li');
  //add a classname to the new li
  li.className = 'list-group-item';
  // add textNode with input value
  li.appendChild(document.createTextNode(newItem));
  // create del button element
  const deleteBtn = document.createElement('button');
  // add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // append textNode
  deleteBtn.appendChild(document.createTextNode('X'));
  // append to li
  li.appendChild(deleteBtn);

    itemList.appendChild(li);
    // add to local storage
    localStorage.setItem('newItem', JSON.stringify(newItem));
}



// remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement;
        itemList.removeChild(li);
    }
    // remove from local storage
  localStorage.removeItem('li')
    }
    
}

// filter functions
function filterItems(e) {
  // convert to lowercase
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

