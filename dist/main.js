(()=>{"use strict";function e(){const c=document.querySelector(".all-projects");c.innerHTML="";for(let n=0;n<t.length;n++){let o=t[n],r=document.createElement("div");r.setAttribute("data-index",n),r.classList.add("project-card"),r.innerHTML=`\n      <h1 class="project-title">${o.projectTitle}</h1>\n      <img class="delete-project" src="assets/delete.svg">\n      `,r.addEventListener("click",(()=>{var c;c=n,t.forEach(((e,t)=>e.active=t===c)),e()})),o.active&&r.classList.add("active-project"),c.appendChild(r)}}let t=[];class c{constructor(e){this.projectTitle=e,this.todosArray=[],this.active=!0}}const n=document.querySelector(".add-project");n.addEventListener("click",(function(n){n.preventDefault();const o=document.querySelector("#project-name").value;let r=new c(o);t.push(r),console.log("pushing the project array to AllProjectsDiv"),console.log(r),e()})),n.addEventListener("click",e),n.addEventListener("click",(function(){o.style.display="none"}));const o=document.querySelector(".project-form-container");document.querySelector(".create-project").addEventListener("click",(function(){o.style.display="flex"}))})();