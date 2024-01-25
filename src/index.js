import { todoRender } from './todos_render.js';
import { createNewProject } from './projects.js';
import { projectRender } from "./render-projects";
import { createNewTodo } from './create_todo.js';
import { removeProject } from "./projects_manip.js"
import { removeTask } from './todos-manip.js';
import { EditTask } from "./todos-manip.js";
import { loadFromStorage } from "./projects";
import { allProjects } from "./projects"



loadFromStorage();


const projectForm = document.querySelector(".project-form-container")


//reaching the add-project button
const btnProject = document.querySelector(".add-project");
btnProject.addEventListener("click",  createNewProject);
btnProject.addEventListener("click", projectRender);
//removes the form when submitted
btnProject.addEventListener("click", function () {
  projectForm.style.display = "none";
});

//exists the project form if "cancel" is clicked
const cancelProjectBtn = document.querySelector(".cancel-project")
//cancelProjectBtn.addEventListener("click", projectRender)
cancelProjectBtn.addEventListener("click", function () {
  projectForm.style.display = "none";
});
        
//submits a todo and exists todo Form
const submitTodoBtn = document.querySelector(".add-task");
submitTodoBtn.addEventListener("click", createNewTodo);
submitTodoBtn.addEventListener("click", todoRender);
submitTodoBtn.addEventListener("click", function () {
  toDoForm.style.display = "none";
 
  });


document.querySelector(".main").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete-task")) {
    const taskIndex = target.closest(".task-card").dataset.index;
    removeTask(taskIndex);
  }
});

// removing the project
document.querySelector(".projects").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete-project")) {
    const projectIndex = target.closest(".project-card").dataset.index;
    removeProject(projectIndex);
  }
});
 
//displaying the project form when create button is clicked
const btnRenderProject = document.querySelector(".create-project");
btnRenderProject.addEventListener("click", function () {
  projectForm.style.display = "flex";
});

//checks if a projects exist, makes todos unavailable for adding
function projectExistCheck () {
  if (allProjects.length === 0) {
    toDoForm.style.display = "none";
    alert("No projects available!");
  } else {
    toDoForm.style.display = "flex";
  }
}


const editTaskForm = document.querySelector(".edit-task-form-container");
const toDoForm = document.querySelector(".task-form-container");
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("task-btn-render")) {
    projectExistCheck();
  } else if (target.classList.contains("add-svg")) {
    projectExistCheck();                             
  } else if (target.classList.contains("cancel-task")) {
    toDoForm.style.display = "none";
  } else if (target.classList.contains("cancel-project")) {
    projectForm.style.display = "none";
  } else if (target.classList.contains("edit-task-svg")) {
    editTaskForm.style.display = "flex";
  }
});

const editBtn = document.querySelector(".edit-add-task");
editBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const editForm = document.querySelector(".edit-task-form-container");
  const editTaskIndex = editForm.dataset.index;
  EditTask(editTaskIndex);
  todoRender();
});

document.querySelector(".main").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("edit-task-svg")) {
    const taskIndex = target.dataset.index;
    const editForm = document.querySelector(".edit-task-form-container");
    editForm.dataset.index = taskIndex;
    editTaskForm.style.display = "flex";
  }
});

