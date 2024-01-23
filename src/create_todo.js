import { activeProject } from "./projects";
import { taskRender } from "./todos_render";


//class for Todo creation
export class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }



}
//creating an empty Todo Array, will store them here
export let tasks = [];

//function for creating a Todo, here we pass the form input
export function createNewTodo(event) {
    event.preventDefault();
    const title = document.getElementById("Title").value;
    const description = document.getElementById("Description").value;
    const dueDate = document.getElementById("DueDate").value;
    const priority = document.getElementById("Priority").value;

    const activeProj = activeProject();

    if (activeProj) {
        const newTask = new Todo(title, description, dueDate, priority);
        activeProj.tasks.push(newTask);
        taskRender();
        
      }


}

/*export class CreateProject {
    constructor(projectArray, projectTitle ) {
        this.projectArray = []
        this.projectTitle = prompt("Please enter a name for the project:");
        this.projectArray.push(this.projectTitle);
        console.log(this.projectArray);
        return { projectArray, projectTitle };
    }

   newTodo(){
        this.todo = new CreateToDo();
        this.projectArray.push(this.todo);
        console.log(this.todo);
        return this.todo;
        
    }

    get allTodos() {
        console.log(this.projectArray);
        return this.projectArray;
    }

}

//const newProject = new CreateProject();
/*let newProject = new Project();
newProject.newTodo();*/
//export const toDo = newProject.newTodo();

