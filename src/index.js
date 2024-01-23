import { CreateToDo } from './create_todo.js';
import { blankProjectLoad } from './blank_project_loading.js';
import { initialdomManip, displayTheForm ,newProjectLoad} from "./initial-dom-manip.js";
import { createNewProject } from './projects.js';
import { projectRender } from "./render-projects";



//reaching the add-project button
const btnProject = document.querySelector(".add-project");
btnProject.addEventListener("click",  createNewProject);
btnProject.addEventListener("click", projectRender);
btnProject.addEventListener("click", function () {
  projectForm.style.display = "none";
});
        

/*const btnTask = document.querySelector(".add-task");
btnTask.addEventListener("click", createTask);
btnTask.addEventListener("click", taskRender);
btnTask.addEventListener("click", function () {
  taskForm.style.display = "none";
});
*/

//displaying the project form
const projectForm = document.querySelector(".project-form-container");
const btnRenderProject = document.querySelector(".create-project");
btnRenderProject.addEventListener("click", function () {
  projectForm.style.display = "flex";
});

 
