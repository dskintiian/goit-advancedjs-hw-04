/* empty css                      */import{a as q,S as E,i as a}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="58498705-656854ec8a48a3b3db88fa617",B="https://pixabay.com/api/",d=15;async function m(t,r){return(await q.get(B,{params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:d}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),R=new E(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const r=t.map(({webformatURL:i,largeImageURL:c,tags:e,likes:o,views:n,comments:S,downloads:P})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${o}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${n}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${S}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${P}</p>
          </div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),R.refresh()}function $(){f.innerHTML=""}function h(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}function v(){p.classList.add("is-visible")}function u(){p.classList.remove("is-visible")}const L=document.querySelector(".form"),O=document.querySelector(".load-more-btn");let l="",s=1;L.addEventListener("submit",x);O.addEventListener("click",A);async function x(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}l=r,s=1,$(),u(),h();try{const i=await m(l,s);if(!i.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits),w(i.totalHits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b(),L.reset()}}async function A(){s+=1,u(),h();try{const t=await m(l,s);y(t.hits),w(t.totalHits),_()}catch{s-=1,v(),a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b()}}function w(t){const r=Math.ceil(t/d);if(s>=r){u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}v()}function _(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
