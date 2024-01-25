import { projectRender } from "./render-projects";
import { headerRender } from "./render-projects";
import { todoRender } from "./todos_render";

//empty Projects Array, here we will store out projects and show them on the page later
export let allProjects = [];

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
    
}

export function defaultProject() {
    const DefaultProject = new Project("Default Project", "");
    allProjects.push(DefaultProject);
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
    allProjects.push(newProject);
    console.log("pushing the project array to AllProjectsDiv");
    console.log(newProject);
    //rendering project on the page
    projectRender();
    headerRender();
    saveToStorage();
    console.log(JSON.stringify(allProjects));
    
    
}

//function that finds our "active" project
export function activeProject() {
    return allProjects.find((project) => project.active);
}
  
  export function switchActiveProject(index) {
    allProjects.forEach((project, i) => (project.active = i === index));
}

export function saveToStorage(){
    localStorage.setItem('projects', JSON.stringify(allProjects))
  }
  
  export function loadFromStorage(){
    const storedProjects = localStorage.getItem('projects');
    if(storedProjects){
        allProjects = JSON.parse(storedProjects);
        projectRender();
        todoRender();
    }
    else{
        defaultProject();
    }
  }