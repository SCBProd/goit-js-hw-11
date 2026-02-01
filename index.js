import{a as d,S as f,i as l}from"./assets/vendor-BIrBgRnv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";const p="54466384-09b1ba24b9e280fec4b671a93",h=a=>d.get("",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>(console.log(e.data),console.log(e.status),console.log(e.statusText),console.log(e.headers),console.log(e.config),e.data)).catch(e=>console.log("Помилка запиту:",e));let c;const n=document.querySelector(".loader"),g=a=>{const e=document.querySelector(".gallery");if(!e)return;const i=a.map(r=>`
      <li class="photo-card">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="photo-info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");e.innerHTML=i,c?c.refresh():c=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})};function m(){const a=document.querySelector(".gallery");a&&(a.innerHTML="")}function y(){n&&n.classList.remove("hidden")}function b(){n&&n.classList.add("hidden")}let u;const L=document.querySelector(".inpt"),w=document.querySelector(".inptButton");w.addEventListener("click",a=>{a.preventDefault();const e=L.value.trim();if(!e){l.show({position:"topRight",color:"red",title:"Error",message:"Please enter a search query"});return}m(),y(),h(e).then(i=>{if(u=i,u.hits.length===0){l.show({position:"topRight",color:"red",title:"Sorry",message:"there are no images matching your search query.Please try again!",iconUrl:"https://img.icons8.com/?size=100&id=12405&format=png&color=000000"});return}g(u.hits)}).catch(()=>{l.show({position:"topRight",color:"red",title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
