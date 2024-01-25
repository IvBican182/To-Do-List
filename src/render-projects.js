import { allProjects, switchActiveProject, activeProject } from "./projects";
import { clearForm, displayTheForm } from "./todos_render";
import { createNewTodo } from "./create_todo";
import { taskRender } from "./todos_render";
import { saveToStorage } from "./projects";

export function projectRender() {
    const projectsDiv = document.querySelector(".projects");
    projectsDiv.innerHTML = "";
    for (let i = 0; i < allProjects.length; i++) {
      let project = allProjects[i];
      let projectCard = document.createElement("div");
      projectCard.setAttribute("data-index", i);
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
      <h1 class="project-title">${project.projectTitle}</h1>
      <img class="delete-project" src="assets/delete.svg">
      `;
      projectCard.addEventListener("click", () => {
        switchActiveProject(i);
        projectRender();
        taskRender();
        headerRender();

        
      });    
      
      if (project.active) {
        projectCard.classList.add("active-project");
        
      }
        
      projectsDiv.appendChild(projectCard);
    }
    saveToStorage();
}




export function headerRender(){
  const header = document.querySelector('.header');
  const activeProj = activeProject();
  header.innerHTML="";

  if (activeProj) {
    const desc = document.createElement('div');
    desc.classList.add('project-info')
    desc.innerHTML=(`<h1 class="title" >${activeProj.projectTitle}</h1>`)
    header.appendChild(desc);
  }
}