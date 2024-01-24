import { activeProject } from "./projects";
import { taskRender } from "./todos_render";
//import { saveToStorage } from "./projects";

export function removeTask(index) {
  const activeProj = activeProject();

  if (activeProj) {
    activeProj.todosArray.splice(index, 1);
    taskRender();
    //saveToStorage();
  }  
}

export function EditTask(index){
  const editTaskForm = document.querySelector('.edit-task-form-container');
  const activeProj = activeProject();
  const task = activeProj.tasks[index];
  task.title = document.querySelector("#edit-task-title").value;
  task.description = document.querySelector("#edit-task-description").value;
  task.date = document.querySelector("#edit-task-date").value; 
  task.priority = document.querySelector("#edit-priority-choice").value;
  editTaskForm.style.display = 'none';
  //saveToStorage();
}