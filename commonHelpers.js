import{S as f,N as L,P as w,C as v}from"./assets/vendor-c9d76756.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const o=new f(".advantages-image-swiper",{modules:[L,w,v],slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-advantages-next",prevEl:".swiper-button-advantages-prev"},on:{init:function(){y(this)},slideChange:function(){b(this)}}}),n=new f(".advantages-text-swiper",{modules:[v],slidesPerView:1,spaceBetween:30});o.controller.control=n,n.controller.control=o;const r=document.querySelector(".swiper-button-advantages-prev"),s=document.querySelector(".swiper-button-advantages-next"),e=document.querySelectorAll('#slider input[type="radio"]'),i=document.querySelectorAll(".slider-dots .dot"),a=document.querySelectorAll(".slide-text");function g(t){i.forEach((c,l)=>{c.classList.toggle("active",l===t)})}function m(t){a.forEach((c,l)=>{l===t?c.classList.add("active"):c.classList.remove("active")})}function d(){for(let t=0;t<e.length;t++)if(e[t].checked)return t;return 0}function p(t){t>=0&&t<e.length&&(console.log(`Switching to slide index: ${t}`),e[t].checked=!0,g(t),m(t))}i.forEach((t,c)=>{t.addEventListener("click",l=>{l.preventDefault(),p(c)})}),r.addEventListener("click",t=>{t.preventDefault();const c=d(),l=c===0?e.length-1:c-1;console.log(`Previous button clicked. Current index: ${c}, Previous index: ${l}`),p(l)}),s.addEventListener("click",t=>{t.preventDefault();const c=d(),l=c===e.length-1?0:c+1;console.log(`Next button clicked. Current index: ${c}, Next index: ${l}`),p(l)}),document.addEventListener("keydown",t=>{t.key==="ArrowLeft"?r.click():t.key==="ArrowRight"&&s.click()}),g(d()),m(d())});function y(o){const n=document.querySelector(".swiper-pagination");n&&(n.innerHTML="",o.slides.forEach((r,s)=>{const e=document.createElement("div");e.classList.add("pagination-dot"),s===o.activeIndex&&e.classList.add("active"),e.addEventListener("click",()=>{o.slideTo(s)}),n.appendChild(e)}))}function b(o){document.querySelectorAll(".pagination-dot").forEach((r,s)=>{r.classList.toggle("active",s===o.activeIndex)})}const h=new f(".gallery-swiper",{modules:[L],slidesPerView:1,spaceBetween:10,loop:!0,slidesPerGroup:1,loopFillGroupWithBlank:!0,speed:800,effect:"slide",easing:"ease-in-out",autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-gallery-next",prevEl:".swiper-button-gallery-prev"},breakpoints:{1200:{slidesPerView:3,spaceBetween:20,slidesPerGroup:3}},on:{slideChange:function(){const o=document.querySelectorAll(".slider-dots-gallery .dot");if(window.innerWidth>=1200){const r=Math.floor(this.realIndex/3);o.forEach((s,e)=>{e===r?s.classList.add("active"):s.classList.remove("active")})}else o.forEach((r,s)=>{s===this.realIndex?r.classList.add("active"):r.classList.remove("active")})}}}),E=document.querySelectorAll(".slider-dots-gallery .dot");E.forEach((o,n)=>{o.addEventListener("click",()=>{window.innerWidth>=1200?h.slideTo(n*3):h.slideTo(n)})});const S=document.querySelector(".js-open-menu"),u=document.querySelector(".js-menu-container"),x=document.querySelector(".js-close-menu");S.addEventListener("click",()=>{u.classList.toggle("is-open")});x.addEventListener("click",()=>{u.classList.remove("is-open")});u.addEventListener("click",o=>{o.target.tagName==="A"&&u.classList.remove("is-open")});const k={root:null,rootMargin:"0px",threshold:.3},I=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&n.target.classList.add("animate")})},k);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".benefits__item").forEach(n=>I.observe(n))});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".about_img_item img, .about__content_img_bottom img"),n={root:null,rootMargin:"0px",threshold:.3},r=new IntersectionObserver((s,e)=>{s.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))})},n);o.forEach(s=>{r.observe(s)})});
//# sourceMappingURL=commonHelpers.js.map
