(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();const $="/bee-in-ua/assets/bh1-33a33373.webp",I="/bee-in-ua/assets/bh4-ebc6ce21.webp",S="/bee-in-ua/assets/datchik-temperatury-vlazhnost-0f6254f2.webp",B="/bee-in-ua/assets/datchik-temperatury-66799e8d.webp",q="/bee-in-ua/assets/platforma-5e86a49e.webp",w="/bee-in-ua/assets/tenzo-sensor-ffea00c8.webp",k="/bee-in-ua/assets/solar-panel-169185f9.webp";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".burger-btn"),r=document.querySelector(".header-menu-wrapper"),l=document.querySelectorAll(".lang-btn");o&&r&&(o.addEventListener("click",c=>{c.stopPropagation();const i=o.classList.toggle("open");r.classList.toggle("open"),o.setAttribute("aria-expanded",i)}),r.querySelectorAll("a").forEach(c=>{c.addEventListener("click",()=>{o.classList.remove("open"),r.classList.remove("open"),o.setAttribute("aria-expanded","false")})}),document.addEventListener("click",c=>{!c.target.closest(".main-header")&&r.classList.contains("open")&&(o.classList.remove("open"),r.classList.remove("open"),o.setAttribute("aria-expanded","false"))})),l.forEach(c=>{c.addEventListener("click",()=>{l.forEach(i=>i.classList.remove("active")),c.classList.add("active")})})});const m=[{id:1,model:"BH_01",title:"Монітор медозбору на 1 вулик",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.",price:6450,img:$},{id:2,model:"BH-04",title:"Монітор медозбору на 4 вулики",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.",price:7250,img:I},{id:3,model:"BH-STH1",title:"Датчик температури та вологості всередині вулика",desc:"Довжина кабелю 1,5м.",price:350,img:S},{id:4,model:"BH-ST1",title:"Датчик температури ззовні",desc:"Довжина кабелю 1м.",price:220,img:B},{id:5,model:"BH-SM1",title:"Вагова платформа з тензодатчиком 200кг",desc:"Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.",price:4750,img:q},{id:6,model:"BH-SM3",title:"Тензодатчик 200кг з кріпежем та регульованими ніжками",desc:"Довжина кабелю 1,5м.",price:2750,img:w},{id:8,model:"AX-10P",title:"Сонячна батарея 4,2Вт 120х200мм",desc:"Автономне живлення для монітора медозбору.",price:600,img:k}],x={"bh01-platform":{title:"Купити пасічні ваги BH-01 + платформа",quantities:{1:1,3:1,4:1,5:1,8:1}},"bh04-platforms":{title:"Купити пасічні ваги BH-04 + платформи",quantities:{2:1,3:1,4:1,5:4,8:1}},"bh01-sensor":{title:"Купити пасічні ваги BH-01 + датчик",quantities:{1:1,3:1,4:1,6:1,8:1}},"bh04-sensors":{title:"Купити пасічні ваги BH-04 + датчики",quantities:{2:1,3:1,4:1,6:4,8:1}}};function H(){const o=document.getElementById("productList");if(!o)return;const r=document.getElementById("grandTotal"),l=document.getElementById("totalItems"),c=document.getElementById("checkoutBtn"),i=document.querySelector(".price-title"),n={};m.forEach(e=>{n[e.id]=0});const E=new URLSearchParams(window.location.search).get("set"),g=x[E];o.innerHTML=m.map(e=>`
        <div class="price-product-card" data-id="${e.id}">

            <div class="price-img-wrap">
                <img
                    src="${e.img}"
                    alt="${e.title}"
                    loading="lazy"
                >
            </div>

            <div class="price-product-info">

                <div class="price-product-text-col">
                    <div class="price-product-title">
                        ${e.title}
                    </div>

                    <div class="price-product-desc">
                        ${e.desc}
                    </div>
                </div>

                <span class="price-product-model">
                    ${e.model}
                </span>

            </div>

            <div class="price-product-controls">

                <div class="price-unit">
                    <span>Ціна: </span>
                    <strong>${e.price.toLocaleString("uk-UA")} грн.</strong>
                </div>

                <div class="price-qty-control">

                    <button
                        type="button"
                        class="price-qty-btn"
                        data-action="dec"
                        data-id="${e.id}"
                    >−</button>

                    <input
                        type="number"
                        class="price-qty-input"
                        id="qty-${e.id}"
                        data-id="${e.id}"
                        value="0"
                        min="0"
                        max="999"
                    >

                    <button
                        type="button"
                        class="price-qty-btn"
                        data-action="inc"
                        data-id="${e.id}"
                    >+</button>

                </div>

                <div class="price-row-subtotal">
                    <span>Разом:</span>
                    <span id="sub-${e.id}">0 грн.</span>
                </div>

            </div>

        </div>
    `).join(""),g&&(i&&(i.textContent=g.title),Object.entries(g.quantities).forEach(([e,t])=>{n[Number(e)]=t;const s=document.getElementById(`qty-${e}`);s&&(s.value=t)}));function v(e,t){let s=parseInt(t,10);(isNaN(s)||s<0)&&(s=0),s>999&&(s=999),n[e]=s;const d=document.getElementById(`qty-${e}`);d&&(d.value=s),y()}function y(){let e=0,t=0;m.forEach(s=>{const d=n[s.id]||0,L=d*s.price;e+=L,t+=d;const h=document.getElementById(`sub-${s.id}`);h&&(h.textContent=`${L.toLocaleString("uk-UA")} грн.`)}),r.textContent=e.toLocaleString("uk-UA"),l.textContent=t,c.disabled=t===0}y(),o.addEventListener("click",e=>{const t=e.target.closest(".price-qty-btn");if(!t)return;const s=Number(t.dataset.id),d=t.dataset.action==="inc"?1:-1;v(s,Math.max(0,(n[s]||0)+d))}),o.addEventListener("input",e=>{if(!e.target.classList.contains("price-qty-input"))return;const t=Number(e.target.dataset.id);v(t,e.target.value)}),c==null||c.addEventListener("click",()=>{const e=m.filter(t=>n[t.id]>0).map(t=>`${t.model} — ${n[t.id]} шт. = ${(n[t.id]*t.price).toLocaleString("uk-UA")} грн.`);alert(`Ваше замовлення:

${e.join(`
`)}

Разом: ${r.textContent} грн.`)});const a=document.getElementById("quickOrderModal"),f=document.getElementById("openQuickOrderBtn"),b=document.getElementById("closeQuickOrderBtn"),u=document.getElementById("quickOrderForm");f==null||f.addEventListener("click",()=>{a==null||a.classList.add("is-open")}),b==null||b.addEventListener("click",()=>{a==null||a.classList.remove("is-open")}),a==null||a.addEventListener("click",e=>{e.target===a&&a.classList.remove("is-open")}),u==null||u.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(u),s=m.filter(d=>n[d.id]>0).map(d=>`${d.model} — ${n[d.id]} шт.`);alert(`Дякуємо, ${t.get("name")}!

Ваше замовлення:
${s.join(`
`)}

Сума: ${r.textContent} грн.

Ми зателефонуємо на ${t.get("phone")}.`),u.reset(),a==null||a.classList.remove("is-open")})}H();
