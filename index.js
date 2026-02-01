import{a as d,S as f,i as p}from"./assets/vendor-BIrBgRnv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";const h="54466384-09b1ba24b9e280fec4b671a93",m=s=>d.get("",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!1}}).then(e=>(console.log(e.data),console.log(e.status),console.log(e.statusText),console.log(e.headers),console.log(e.config),e.data)).catch(e=>console.log("Помилка запиту:",e));let l;const i=document.querySelector(".loader"),g=s=>{const e=document.querySelector(".ul-gallery");if(!e)return;const a=s.map(r=>`
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
    `).join("");e.innerHTML=a,l?l.refresh():l=new f(".ul-gallery a",{captions:!0,captionsData:"alt",captionDelay:250})};function y(){i&&i.classList.remove("hidden")}function u(){i&&i.classList.add("hidden")}let c;const b=document.querySelector(".inpt"),L=document.querySelector(".inptButton");L.addEventListener("click",s=>{s.preventDefault(),y();const e=b.value;e&&m(e).then(a=>{c=a,c.hits.length===0?(u(),p.show({position:"topRight",color:"red",title:"Sorry",message:"there are no images matching your search query.Please try again!",iconUrl:"https://img.icons8.com/?size=100&id=12405&format=png&color=000000"})):(g(c.hits),u())})});
//# sourceMappingURL=index.js.map
