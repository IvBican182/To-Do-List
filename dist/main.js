(()=>{"use strict";function e(){const c=document.querySelector(".projects");c.innerHTML="";for(let s=0;s<n.length;s++){let o=n[s],a=document.createElement("div");a.setAttribute("data-index",s),a.classList.add("project-card"),a.innerHTML=`\n      <h1 class="project-title">${o.projectTitle}</h1>\n      <img class="delete-project" src="assets/delete.svg">\n      `,a.addEventListener("click",(()=>{var c;c=s,n.forEach(((e,t)=>e.active=t===c)),e(),i(),t()})),o.active&&a.classList.add("active-project"),c.appendChild(a)}o()}function t(){const e=document.querySelector(".header"),t=s();if(e.innerHTML="",t){const n=document.createElement("div");n.classList.add("project-info"),n.innerHTML=`<h1 class="title" >${t.projectTitle}</h1>`,e.appendChild(n)}}let n=[];class c{constructor(e){this.projectTitle=e,this.todosArray=[],this.active=!0}}function s(){return n.find((e=>e.active))}function o(){localStorage.setItem("projects",JSON.stringify(n))}function i(){const e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("render-task-form"),t.innerHTML='\n  <p class="task-btn-render">\n    <img\n      class="add-svg"\n      alt="add-task-plus-picture"\n      src="assets/create.svg"\n    />\n    Add To Do\n  </p>',e.innerHTML="";const n=s();n&&n.todosArray.forEach(((t,n)=>{let c=document.createElement("div");c.innerHTML=`<div class="task-card" data-index='${n}'>\n        <div class='left-side-task'>\n        <label class='checkbox-cont'>\n        <input class="checkbox" type="checkbox" />\n        </label>\n        <h1 class="task-title">${t.title}</h1>\n        <h2 class='description'>${t.description}</h2>\n        </div>\n        <div class='right-side-task'>\n        <h2 class='date'>${t.date}</h2>\n        <h2 class='priority'>${t.priority}</h2>\n        <button class='delete-task'>Delete</button>\n        <img class='edit-task-svg' data-index='${n}' src='assets/edit.svg' alt='edit-svg'>\n        </div>\n    </div>`,e.appendChild(c)})),e.appendChild(t)}class a{constructor(e,t,n,c){this.title=e,this.description=t,this.date=n,this.priority=c}}const r=[];!function(){const s=localStorage.getItem("projects");s?(n=JSON.parse(s),e(),i()):function(){const s=new c("Default Project","");n.push(s),e(),t()}()}();const d=document.querySelector(".project-form-container"),l=document.querySelector(".add-project");l.addEventListener("click",(function(s){s.preventDefault();const i=document.querySelector("#project-name").value;let a=new c(i);n.push(a),console.log("pushing the project array to AllProjectsDiv"),console.log(a),e(),t(),o(),console.log(JSON.stringify(n))})),l.addEventListener("click",e),l.addEventListener("click",(function(){d.style.display="none"})),document.querySelector(".cancel-project").addEventListener("click",(function(){d.style.display="none"}));const u=document.querySelector(".add-task");u.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector("#task-title").value,n=document.querySelector("#task-description").value,c=document.querySelector("#task-date").value,d=document.querySelector("#priority-choice").value,l=s();if(l){const e=new a(t,n,c,d);r.push(e),console.log(JSON.stringify(r)),l.todosArray.push(e),i(),o()}console.log(l)})),u.addEventListener("click",i),u.addEventListener("click",(function(){y.style.display="none"})),document.querySelector(".main").addEventListener("click",(function(e){const t=e.target;t.classList.contains("delete-task")&&function(e){const t=s();t&&(t.todosArray.splice(e,1),i(),o())}(t.closest(".task-card").dataset.index)})),document.querySelector(".projects").addEventListener("click",(function(t){const c=t.target;if(c.classList.contains("delete-project")){s=c.closest(".project-card").dataset.index,n.splice(s,1),e(),i(),o()}var s})),document.querySelector(".create-project").addEventListener("click",(function(){d.style.display="flex"}));const p=document.querySelector(".edit-task-form-container"),y=document.querySelector(".task-form-container");document.addEventListener("click",(function(e){const t=e.target;t.classList.contains("task-btn-render")||t.classList.contains("add-svg")?0===n.length?y.style.display="none":y.style.display="flex":t.classList.contains("cancel-task")?y.style.display="none":t.classList.contains("cancel-project")?d.style.display="none":t.classList.contains("edit-task-svg")&&(p.style.display="flex")})),document.querySelector(".edit-add-task").addEventListener("click",(function(e){e.preventDefault(),function(e){const t=document.querySelector(".edit-task-form-container"),n=s().todosArray[e];n.title=document.querySelector("#edit-task-title").value,n.description=document.querySelector("#edit-task-description").value,n.date=document.querySelector("#edit-task-date").value,n.priority=document.querySelector("#edit-priority-choice").value,t.style.display="none",o()}(document.querySelector(".edit-task-form-container").dataset.index),i()})),document.querySelector(".main").addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("edit-task-svg")){const e=t.dataset.index;document.querySelector(".edit-task-form-container").dataset.index=e,p.style.display="flex"}}))})();