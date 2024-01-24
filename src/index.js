import { CreateToDo } from './create_todo.js';
import { blankProjectLoad } from './blank_project_loading.js';
import { taskRender } from './todos_render.js';
import { createNewProject } from './projects.js';
import { projectRender } from "./render-projects";
import { createNewTodo } from './create_todo.js';
import { displayTheForm } from './todos_render.js';

const toDoForm = document.querySelector(".task-form-container");

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
  displayTheForm();
 
  });


//displaying the project form
const projectForm = document.querySelector(".project-form-container");
const btnRenderProject = document.querySelector(".create-project");
btnRenderProject.addEventListener("click", function () {
  projectForm.style.display = "flex";
});

//const toDoForm = document.querySelector(".todo-form-container");

 
