(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=l(t);fetch(t.href,c)}})();const b="/bee-in-ua/assets/GSM-vesy-dlia-paseki-BH-01-f8a4a01e.jpg",L="/bee-in-ua/assets/vagy-pasichni-golovniy-pristriy-BH-04-ccbeeb33.jpg",E="/bee-in-ua/assets/datchik-temperatury-vlazhnosti-dlia-paseki-6a129d81.jpg",h="/bee-in-ua/assets/datchik-temperatury-dlia-paseki-BH-01-1dc7a187.jpg",I="/bee-in-ua/assets/pasechnie_vesy_01-0c0805e6.jpg",B="/bee-in-ua/assets/tenzo_sensor_BH-SM3-472e01b4.jpg",$="/bee-in-ua/assets/solar_panel_12V_polycrystal-395f2177.jpg";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".burger-btn"),a=document.querySelector(".header-menu-wrapper"),l=document.querySelectorAll(".lang-btn");n&&a&&(n.addEventListener("click",s=>{s.stopPropagation();const t=n.classList.toggle("open");a.classList.toggle("open"),n.setAttribute("aria-expanded",t)}),a.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{n.classList.remove("open"),a.classList.remove("open"),n.setAttribute("aria-expanded","false")})}),document.addEventListener("click",s=>{!s.target.closest(".main-header")&&a.classList.contains("open")&&(n.classList.remove("open"),a.classList.remove("open"),n.setAttribute("aria-expanded","false"))})),l.forEach(s=>{s.addEventListener("click",()=>{l.forEach(t=>t.classList.remove("active")),s.classList.add("active")})})});const m=[{id:1,model:"BH_01",title:"Монітор медозбору на 1 вулик",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.",price:6450,img:b},{id:2,model:"BH-04",title:"Монітор медозбору на 4 вулики",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.",price:7250,img:L},{id:3,model:"BH-STH1",title:"Датчик температури та вологості всередині вулика",desc:"Довжина кабелю 1,5м.",price:350,img:E},{id:4,model:"BH-ST1",title:"Датчик температури ззовні",desc:"Довжина кабелю 1м.",price:220,img:h},{id:5,model:"BH-SM1",title:"Вагова платформа з тензодатчиком 200кг",desc:"Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.",price:4750,img:I},{id:6,model:"BH-SM3",title:"Тензодатчик 200кг з кріпежем та регульованими ніжками",desc:"Довжина кабелю 1,5м.",price:2750,img:B},{id:8,model:"AX-10P",title:"Сонячна батарея 4,2Вт 120х200мм",desc:"Автономне живлення для монітора медозбору.",price:600,img:$}];function S(){const n=document.getElementById("productList");if(!n)return;const a=document.getElementById("grandTotal"),l=document.getElementById("totalItems"),s=document.getElementById("checkoutBtn"),t={};m.forEach(e=>{t[e.id]=0}),n.innerHTML=m.map(e=>`
    <div class="price-product-card" data-id="${e.id}">
      <div class="price-img-wrap">
        <img src="${e.img}" alt="${e.title}" loading="lazy">
      </div>
      <div class="price-product-info">
        <div class="price-product-text-col">
          <div class="price-product-title">${e.title}</div>
          <div class="price-product-desc">${e.desc}</div>
        </div>
        <span class="price-product-model">${e.model}</span>
      </div>
      <div class="price-product-controls">
        <div class="price-unit"><span>Ціна: </span><strong>${e.price} грн.</strong></div>
        <div class="price-qty-control">
          <button type="button" class="price-qty-btn" data-action="dec" data-id="${e.id}">−</button>
          <input type="number" class="price-qty-input" id="qty-${e.id}" data-id="${e.id}" value="0" min="0" max="999">
          <button type="button" class="price-qty-btn" data-action="inc" data-id="${e.id}">+</button>
        </div>
        <div class="price-row-subtotal">
          <span>Разом:</span>
          <span id="sub-${e.id}">0 грн.</span>
        </div>
      </div>
    </div>
  `).join("");function c(e,i){let o=parseInt(i,10);(isNaN(o)||o<0)&&(o=0),t[e]=o;const d=document.getElementById(`qty-${e}`);d&&(d.value=o),u()}function u(){let e=0,i=0;m.forEach(o=>{const d=t[o.id]||0,f=d*o.price;e+=f,i+=d;const y=document.getElementById(`sub-${o.id}`);y&&(y.textContent=`${f.toLocaleString("uk-UA")} грн.`)}),a.textContent=e.toLocaleString("uk-UA"),l.textContent=i,s.disabled=i===0}n.addEventListener("click",e=>{const i=e.target.closest(".price-qty-btn");if(!i)return;const o=Number(i.dataset.id),d=i.dataset.action==="inc"?1:-1;c(o,Math.max(0,(t[o]||0)+d))}),n.addEventListener("input",e=>{if(!e.target.classList.contains("price-qty-input"))return;const i=Number(e.target.dataset.id);c(i,e.target.value)}),s==null||s.addEventListener("click",()=>{const e=m.filter(i=>t[i.id]>0).map(i=>`${i.model} — ${t[i.id]} шт. = ${t[i.id]*i.price} грн.`);alert(`Ваше замовлення:

${e.join(`
`)}

Разом: ${a.textContent} грн.`)});const r=document.getElementById("quickOrderModal"),g=document.getElementById("openQuickOrderBtn"),v=document.getElementById("closeQuickOrderBtn"),p=document.getElementById("quickOrderForm");g==null||g.addEventListener("click",()=>r==null?void 0:r.classList.add("is-open")),v==null||v.addEventListener("click",()=>r==null?void 0:r.classList.remove("is-open")),r==null||r.addEventListener("click",e=>{e.target===r&&r.classList.remove("is-open")}),p==null||p.addEventListener("submit",e=>{e.preventDefault();const i=new FormData(p);alert(`Дякуємо, ${i.get("name")}! Заявку прийнято. Ми зателефонуємо на ${i.get("phone")}.`),p.reset(),r==null||r.classList.remove("is-open")})}S();
