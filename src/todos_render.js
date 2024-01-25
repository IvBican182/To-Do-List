import { activeProject } from "./projects";



export function taskRender() {
  const main = document.querySelector(".main");
  const taskRenderBtn = document.createElement("div");
  taskRenderBtn.classList.add('render-task-form');
  taskRenderBtn.innerHTML = `
  <p class="task-btn-render">
    <img
      class="add-svg"
      alt="add-task-plus-picture"
      src="assets/create.svg"
    />
    Add To Do
  </p>`;
  main.innerHTML = "";
  const activeProj = activeProject();
  if (activeProj) {
    activeProj.todosArray.forEach((todo, index) => {
      let todoCard = document.createElement("div");
      todoCard.innerHTML = `<div class="task-card" data-index='${index}'>
        <div class='left-side-task'>
        <label class='checkbox-cont'>
        <input class="checkbox" type="checkbox" />
        </label>
        <h1 class="task-title">${todo.title}</h1>
        <h2 class='description'>${todo.description}</h2>
        </div>
        <div class='right-side-task'>
        <h2 class='date'>${todo.date}</h2>
        <h2 class='priority'>${todo.priority}</h2>
        <button class='delete-task'>Delete</button>
        <img class='edit-task-svg' data-index='${index}' src='assets/edit.svg' alt='edit-svg'>
        </div>
    </div>`;
      main.appendChild(todoCard);
    });
  }
  main.appendChild(taskRenderBtn);
}



//projecting the ToDo form function
export function displayTheForm() {
    const toDoForm = document.querySelector(".task-form");
    //document.getElementById("add-todo-form").style.display = "";
    if(toDoForm.style.display === "none") {
        toDoForm.style.display = "";
        toDoForm.style.justifyContent = "center";
        toDoForm.style.alignItems = "center";
      } else {
        toDoForm.style.display = "none";
      }
}

//function to remove the form once submit is clicked
export function clearForm() {
    const nodeListCheckList = document.querySelectorAll(".form-li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

