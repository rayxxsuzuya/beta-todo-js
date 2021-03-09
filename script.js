const $input = document.querySelector('#type-text');
const $block = document.querySelector('.task__block');
const itemArray = [];

function addItem(e) {
  if (e.key === 'Enter') {
    let item = document.createElement('div');
    item.innerHTML = e.target.value;
    item.classList.add('task__item');

    let btn = document.createElement('button');
    btn.innerHTML = '&#10003;';
    btn.classList.add('task__btn');
    btn.addEventListener('click', completeItem);
    item.append(btn);

    itemArray.push(item);
    console.log('+1', itemArray);
    renderItems();
    e.target.value = '';
  }
}

function completeItem(e) {
  e.preventDefault();
  e.target.parentElement.style.borderColor = 'lime';
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'x';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', removeByButton);
  e.target.parentElement.append(removeBtn);
  e.target.remove();
}

function removeByButton(e) {
  e.preventDefault();
  for (let i = 0; i < itemArray.length; i++) {
    if (e.target.parentElement == itemArray[i]) {
      e.target.parentElement.remove();
      itemArray.splice(i, 1);
    }
  }
  console.log('-1', itemArray);
}

function renderItems() {
  for (let i = 0; i < itemArray.length; i++) {
    $block.insertAdjacentElement('beforeend', itemArray[i])
  }
}

$input.addEventListener('keydown', addItem);
