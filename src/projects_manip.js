import { allProjects } from "./projects";
import { projectRender } from "./render-projects";
import { todoRender } from "./todos_render";
import { saveToStorage } from "./projects";

export function removeProject(index) {
    allProjects.splice(index, 1);
    projectRender();
    todoRender();
    saveToStorage();
}