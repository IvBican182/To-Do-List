import { projectRender } from "./render-projects";
import { headerRender } from "./render-projects";
import { taskRender } from "./todos_render";

//empty Projects Array, here we will store out projects and show them on the page later
export let Projects = [];

//project creation class
export class Project {
    //we will show their title on the page
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        //creating an empty array,here we will store our toDos as objects
        this.todosArray = [];   
        //this.active property will later determine which project is selected and/or ready to take in our Todos
        this.active = true;  
    }
    //class method for pushing todos. I might change this later
   //addTodo(todo) {
        //this.todosArray.push(todo);
   // }
}

export function defaultProject() {
    const DefaultProject = new Project("Default Project", "");
    Projects.push(DefaultProject);
    projectRender();
    headerRender();
  }

//project creating function
export function createNewProject(event) {
    //prevents output from dissapearing from the console
    event.preventDefault();
    //we pass on the user input from our form in HTML. Attaching it's value to project title
    const projectTitle = document.querySelector("#project-name").value;
    //making an instance for our project
    let newProject = new Project(projectTitle);
    //pushing our new project to our global array of projects
    Projects.push(newProject);
    console.log("pushing the project array to AllProjectsDiv");
    console.log(newProject);
    //rendering project on the page
    projectRender();
    headerRender();
    saveToStorage();
    console.log(JSON.stringify(Projects));
    //projectRender();
    //return newProject;
    
}

//function that finds our "active" project
export function activeProject() {
    return Projects.find((project) => project.active);
}
  
  export function switchActiveProject(index) {
    Projects.forEach((project, i) => (project.active = i === index));
}

export function saveToStorage(){
    localStorage.setItem('projects', JSON.stringify(Projects))
  }
  
  export function loadFromStorage(){
    const storedProjects = localStorage.getItem('projects');
    if(storedProjects){
        Projects = JSON.parse(storedProjects);
        projectRender();
        taskRender();
    }
    else{
        defaultProject();
    }
  }