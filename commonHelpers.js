import{a as E,S as L,i as f}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b="42508369-6cc99fb978405cb8598a23b23",w="https://pixabay.com/api/",v="photo",$="horizontal",S=!0,h=15;async function g(r,t=1){try{const s=encodeURIComponent(r),i=`${w}?key=${b}&q=${s}&image_type=${v}&orientation=${$}&safesearch=${S}&per_page=${h}&page=${t}`,e=await E.get(i);if(e.status!==200)throw new Error("Image error");return e.data}catch(s){throw new Error("Error while fetching images from pixabay",s)}}function u(r,t){t.innerHTML="";const s=r.map(e=>` <div class="card">
         <a href="${e.webformatURL}"><img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
         <div class="card-info">
           <p>Likes: <span>${e.likes}</span></p>
           <p>Views: <span>${e.views}</span></p>
           <p>Comments: <span>${e.comments}</span></p>
           <p>Downloads:<span>${e.downloads}</span></p>
         </div></a>
       </div> `).join("");t.innerHTML=s,new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l(r){f.error({title:"Error",message:r,position:"topRight"})}const I=document.querySelector("#search-form"),p=document.querySelector("#search-input"),R=document.querySelector(".gallery"),m=document.getElementById("loader"),n=document.querySelector(".btn-load-more");let a="",c=1;I.addEventListener("submit",async function(r){if(r.preventDefault(),a=p.value.trim(),console.log(a),a===""){l("Please fill input");return}p.value="",m.classList.remove("is-hidden");try{const t=await g(a,1);c=1,y(t)}catch(t){console.error("Error during search:",t),l("Error during search")}finally{m.classList.add("is-hidden")}});n.addEventListener("click",async function(){const r=document.getElementById("load-more-loader");r.classList.remove("is-hidden"),n.disabled=!0;try{const t=await g(a,c+1);c++,y(t),c*h>=t.totalHits&&(n.classList.add("is-hidden"),q())}catch(t){console.error("Error during loading more images:",t),l("Error loading more images")}finally{r.classList.add("is-hidden"),n.disabled=!1}});function q(){f.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function y(r){if(r.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}n.classList.contains("is-hidden")&&n.classList.remove("is-hidden"),u(r.hits,R),u(r.hits,document.querySelector(".gallery"));const t=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
