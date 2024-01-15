import { blankProjectLoad } from './blank_project_loading.js';

export function initialdomManip () {

    //DOM for heading
    const contentDiv = document.querySelector(".content");
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    contentDiv.appendChild(heading);

    //DOM  for default project
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);

}