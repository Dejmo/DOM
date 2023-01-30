let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  //CREATE NEW ELEMENT
  let li = document.createElement('li');
  //ATTACH TO => (CREATE TEXT NODE (NODE.TEXT))
  li.appendChild(document.createTextNode(input.value));
  //ATTATCH TO SOMETHING
  ul.appendChild(li);
  //CLEARS INPUT
  input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
}

//KEYPRESS GOES TO FUNCTION(###)
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.code === 'Enter') {
      createListElement();
  }
}

//NO () AFTER FUNCTIONS
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);