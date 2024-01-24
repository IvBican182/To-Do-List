import { activeProject } from "./projects";
import { Projects } from "./projects";



//class for Todo creation
export class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }



}
//creating an empty Todo Array, will store them here
export const tasks = [];

//function for creating a Todo, here we pass the form input
export function createNewTodo(event) {
    event.preventDefault();
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector("#priority-choice").value;

    const activeProj = activeProject();

    if (activeProj) {
        const newTask = new Todo(title, description, date, priority);
        console.log(newTask);
        tasks.push(newTask);
        console.log(JSON.stringify(tasks));
        //taskRender();
        activeProj.todosArray.push(newTask);
        
        
        
      }
    //console.log(`PROJECTS: ${Projects}`);
    console.log(activeProj);

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

