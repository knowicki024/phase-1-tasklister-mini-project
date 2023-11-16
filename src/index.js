// document.addEventListener("DOMContentLoaded", () => {
//   const taskInput = document.getElementById("new-task-description");
//   const submitButton = document.querySelector('input[type="submit"]');
//   const taskList = document.getElementById("tasks");

//   submitButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const taskDescription = taskInput.value;
//     const newTask = document.createElement("li");
//     newTask.textContent = taskDescription;
//     taskList.appendChild(newTask);
//     taskInput.value = ""; 
//   });


//   taskInput.addEventListener("input", (event) => {
//     const taskDescription = event.target.value;
//     console.log(taskDescription); 
//   });
// });

document.addEventListener("DOMContentLoaded", () => {

  const tasksUlElement = document.getElementById('tasks')

  const createTaskForm = document.getElementById("create-task-form")
  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()

  const inputTaskElement = document.getElementsById("new-task-description")
  // console.log(inputTaskElement.value)
  
  
  const liElement = document.createElement('li')
liElement.textContent = inputTaskElement.value + " "

const deleteButton = document.createElement('button')
deleteButton.textContent = " X "
deleteButton.setAttribute = ('data-description', inputTaskElement.value)


liElement.appendChild(deleteButton)


tasksUlElement.appendChild(liElement)

createTaskForm.reset()
})
});