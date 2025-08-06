const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });


  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
