!function(){"use strict";let e=(()=>{const e=window.location.search;return new URLSearchParams(e).get("id")})(),t=e?"https://ds-eportfolio.herokuapp.com/api/project/"+e:"https://ds-eportfolio.herokuapp.com/api/project",o=document.querySelectorAll("a.a-link"),n=document.querySelectorAll("button.button"),l=document.getElementById("logo"),a=document.getElementById("name"),c=document.getElementById("project-text"),d=document.getElementById("stack-text"),i=document.querySelector("main"),r=document.getElementById("achievement"),s=document.getElementById("achievement-review"),m=document.getElementById("achievement-all"),u=document.querySelector("div.single-achievement"),h=document.querySelector("div.achievement-logo"),p=document.getElementById("info-link"),g=document.createElement("a");e?i.removeChild(m):(u.removeChild(h),i.removeChild(s)),window.screen.width<700&&null==e?r.style.height="3rem":r.style.height="10rem",r.style.boxShadow="0rem .8rem .8rem #edeced";let y=document.createElement("ul");y.className="keyword flex";let E,v,w,f=1;o.forEach((e=>e.setAttribute("href","achievement.html?id="+f++))),(e=>new Promise(((t,o)=>{let n=new XMLHttpRequest;n.onreadystatechange=()=>{4===n.readyState&&(200===n.status?t(JSON.parse(n.responseText)):o("Une erreur s'est produite"))},n.open("GET",e,!0),n.send()})))(t).then((t=>{e&&x(t)})).catch((e=>console.log(e)));const x=e=>{console.log(e),l.setAttribute("src","img/"+e.logo),a.textContent=e.name,c.textContent=e.content,v=e.keyword,E=e.gallery,w=e.legend,e.link&&(g.href=e.link,g.textContent="Voir le site",p.appendChild(g));for(let e of v){let t=document.createElement("li");t.className="badge",t.textContent=e,y.appendChild(t)}k()};d.appendChild(y),console.log(g),e?n.forEach((e=>e.addEventListener("click",(()=>{document.location.href="achievement.html"})))):n.forEach((e=>e.addEventListener("click",(()=>{document.location.href="index.html"}))));class C{constructor(){this.diapo=null}init(){this.diapoHeader=new Carousel({listImage:E,legendText:`${w}`,autoplay:5e9,selector:".carousel-desc-responsive"}),this.diapoHeader.init(),this.diapoHeader.play(),this.diapoHeader=new Carousel({listImage:E,legendText:`${w}`,autoplay:5e9,selector:".carousel-desc"}),this.diapoHeader.init(),this.diapoHeader.play()}}const k=()=>{(new C).init()}}();