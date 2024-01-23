import { Projects, switchActiveProject, activeProject } from "./projects";

export function projectRender() {
    const projectsDiv = document.querySelector(".all-projects");
    projectsDiv.innerHTML = "";
    for (let i = 0; i < Projects.length; i++) {
      let project = Projects[i];
      let projectCard = document.createElement("div");
      projectCard.setAttribute("data-index", i);
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
      <h1 class="project-title">${project.projectTitle}</h1>
      <img class="delete-project" src="assets/delete.svg">
      `;
      projectCard.addEventListener("click", () => {
        switchActiveProject(i);
        //taskRender();
        projectRender();
        //headerRender()
      });
      if (project.active) {
        projectCard.classList.add("active-project");
      }
      projectsDiv.appendChild(projectCard);
    }
    //saveToStorage()
  }