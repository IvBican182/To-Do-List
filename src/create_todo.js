import { activeProject } from "./projects";
import { todoRender } from "./todos_render";
import { saveToStorage } from "./projects";



//class for Todo creation
export class Todo {
    constructor (title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }



}
//creating an empty Todo Array,we will store them here
export const todos = [];

//function for creating a Todo, here we pass the form input
export function createNewTodo(event) {
    event.preventDefault();
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector("#priority-choice").value;

    const activeProj = activeProject();
    //if the current project is active (if we clicked on it) it creates a new Todo and pushes it to our Todos array
    if (activeProj) {
        const newTodo = new Todo(title, description, date, priority);
        todos.push(newTodo);
        console.log(JSON.stringify(todos));
        //finaly we push a todo to our active projects Array
        activeProj.todosArray.push(newTodo);
        todoRender();
        saveToStorage();
        
        
      }
    
    console.log(activeProj);

}

