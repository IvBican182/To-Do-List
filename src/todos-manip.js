import { activeProject } from "./projects";
import { todoRender } from "./todos_render";
import { saveToStorage } from "./projects";

export function removeTask(index) {
  const activeProj = activeProject();

  if (activeProj) {
    activeProj.todosArray.splice(index, 1);
    todoRender();
    saveToStorage();
  }  
}

export function EditTask(index){
  const editTaskForm = document.querySelector('.edit-todo-form-container');
  const activeProj = activeProject();
  const task = activeProj.todosArray[index];
  task.title = document.querySelector("#edit-todo-title").value;
  task.description = document.querySelector("#edit-todo-description").value;
  task.date = document.querySelector("#edit-todo-date").value; 
  task.priority = document.querySelector("#edit-priority-choice").value;
  editTaskForm.style.display = 'none';
  saveToStorage();
}