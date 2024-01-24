import { CreateToDo } from './create_todo.js';
import { blankProjectLoad } from './blank_project_loading.js';
import { taskRender } from './todos_render.js';
import { createNewProject } from './projects.js';
import { projectRender } from "./render-projects";
import { createNewTodo } from './create_todo.js';
import { displayTheForm } from './todos_render.js';
import { removeProject } from "./projects_manip.js"
import { removeTask } from './todos-manip.js';


//reaching the add-project button
const btnProject = document.querySelector(".add-project");
btnProject.addEventListener("click",  createNewProject);
btnProject.addEventListener("click", projectRender);
btnProject.addEventListener("click", function () {
  projectForm.style.display = "none";
});
        

const submitTodoBtn = document.querySelector(".add-task");
submitTodoBtn.addEventListener("click", createNewTodo);
submitTodoBtn.addEventListener("click", taskRender);
submitTodoBtn.addEventListener("click", function () {
  taskForm.style.display = "none";
 
  });


//const toDoForm = document.querySelector(".todo-form-container");
document.querySelector(".main").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete-task")) {
    const taskIndex = target.closest(".task-card").dataset.index;
    removeTask(taskIndex);
  }
});

document.querySelector(".projects").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete-project")) {
    const projectIndex = target.closest(".project-card").dataset.index;
    removeProject(projectIndex);
  }
});
 
//displaying the project form
const projectForm = document.querySelector(".project-form-container");
const btnRenderProject = document.querySelector(".create-project");
btnRenderProject.addEventListener("click", function () {
  projectForm.style.display = "flex";
});

/*const editTaskForm = document.querySelector(".edit-task-form-container");
const taskForm = document.querySelector(".task-form-container");
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("task-btn-render")) {
    taskForm.style.display = "flex";
  } else if (target.classList.contains("add-svg")) {
    taskForm.style.display = "flex";
  } else if (target.classList.contains("cancel-task")) {
    taskForm.style.display = "none";
  } else if (target.classList.contains("cancel-project")) {
    projectForm.style.display = "none";
  } else if (target.classList.contains("edit-task-svg")) {
    editTaskForm.style.display = "flex";
  }
});
*/
const editBtn = document.querySelector(".edit-add-task");
editBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const editForm = document.querySelector(".edit-task-form-container");
  const editTaskIndex = editForm.dataset.index;
  EditTask(editTaskIndex);
  taskRender();
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