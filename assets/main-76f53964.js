(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();const B="/bee-in-ua/assets/GSM-vesy-dlia-paseki-BH-01-f8a4a01e.jpg",$="/bee-in-ua/assets/vagy-pasichni-golovniy-pristriy-BH-04-ccbeeb33.jpg",S="/bee-in-ua/assets/datchik-temperatury-vlazhnosti-dlia-paseki-6a129d81.jpg",I="/bee-in-ua/assets/datchik-temperatury-dlia-paseki-BH-01-1dc7a187.jpg",q="/bee-in-ua/assets/pasechnie_vesy_01-0c0805e6.jpg",k="/bee-in-ua/assets/tenzo_sensor_BH-SM3-472e01b4.jpg",H="/bee-in-ua/assets/solar_panel_12V_polycrystal-395f2177.jpg";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".burger-btn"),r=document.querySelector(".header-menu-wrapper"),l=document.querySelectorAll(".lang-btn");o&&r&&(o.addEventListener("click",c=>{c.stopPropagation();const i=o.classList.toggle("open");r.classList.toggle("open"),o.setAttribute("aria-expanded",i)}),r.querySelectorAll("a").forEach(c=>{c.addEventListener("click",()=>{o.classList.remove("open"),r.classList.remove("open"),o.setAttribute("aria-expanded","false")})}),document.addEventListener("click",c=>{!c.target.closest(".main-header")&&r.classList.contains("open")&&(o.classList.remove("open"),r.classList.remove("open"),o.setAttribute("aria-expanded","false"))})),l.forEach(c=>{c.addEventListener("click",()=>{l.forEach(i=>i.classList.remove("active")),c.classList.add("active")})})});const p=[{id:1,model:"BH_01",title:"Монітор медозбору на 1 вулик",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.",price:6450,img:B},{id:2,model:"BH-04",title:"Монітор медозбору на 4 вулики",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.",price:7250,img:$},{id:3,model:"BH-STH1",title:"Датчик температури та вологості всередині вулика",desc:"Довжина кабелю 1,5м.",price:350,img:S},{id:4,model:"BH-ST1",title:"Датчик температури ззовні",desc:"Довжина кабелю 1м.",price:220,img:I},{id:5,model:"BH-SM1",title:"Вагова платформа з тензодатчиком 200кг",desc:"Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.",price:4750,img:q},{id:6,model:"BH-SM3",title:"Тензодатчик 200кг з кріпежем та регульованими ніжками",desc:"Довжина кабелю 1,5м.",price:2750,img:k},{id:8,model:"AX-10P",title:"Сонячна батарея 4,2Вт 120х200мм",desc:"Автономне живлення для монітора медозбору.",price:600,img:H}],x={"bh01-platform":{title:"Купити пасічні ваги BH-01 + платформа",quantities:{1:1,3:1,4:1,5:1,8:1}},"bh04-platforms":{title:"Купити пасічні ваги BH-04 + платформи",quantities:{2:1,3:1,4:1,5:4,8:1}},"bh01-sensor":{title:"Купити пасічні ваги BH-01 + датчик",quantities:{1:1,3:1,4:1,6:1,8:1}},"bh04-sensors":{title:"Купити пасічні ваги BH-04 + датчики",quantities:{2:1,3:1,4:1,6:4,8:1}}};function O(){const o=document.getElementById("productList");if(!o)return;const r=document.getElementById("grandTotal"),l=document.getElementById("totalItems"),c=document.getElementById("checkoutBtn"),i=document.querySelector(".price-title"),s={};p.forEach(e=>{s[e.id]=0});const E=new URLSearchParams(window.location.search).get("set"),g=x[E];o.innerHTML=p.map(e=>`
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
    `).join(""),g&&(i&&(i.textContent=g.title),Object.entries(g.quantities).forEach(([e,t])=>{s[Number(e)]=t;const n=document.getElementById(`qty-${e}`);n&&(n.value=t)}));function b(e,t){let n=parseInt(t,10);(isNaN(n)||n<0)&&(n=0),n>999&&(n=999),s[e]=n;const d=document.getElementById(`qty-${e}`);d&&(d.value=n),y()}function y(){let e=0,t=0;p.forEach(n=>{const d=s[n.id]||0,L=d*n.price;e+=L,t+=d;const h=document.getElementById(`sub-${n.id}`);h&&(h.textContent=`${L.toLocaleString("uk-UA")} грн.`)}),r.textContent=e.toLocaleString("uk-UA"),l.textContent=t,c.disabled=t===0}y(),o.addEventListener("click",e=>{const t=e.target.closest(".price-qty-btn");if(!t)return;const n=Number(t.dataset.id),d=t.dataset.action==="inc"?1:-1;b(n,Math.max(0,(s[n]||0)+d))}),o.addEventListener("input",e=>{if(!e.target.classList.contains("price-qty-input"))return;const t=Number(e.target.dataset.id);b(t,e.target.value)}),c==null||c.addEventListener("click",()=>{const e=p.filter(t=>s[t.id]>0).map(t=>`${t.model} — ${s[t.id]} шт. = ${(s[t.id]*t.price).toLocaleString("uk-UA")} грн.`);alert(`Ваше замовлення:

${e.join(`
`)}

Разом: ${r.textContent} грн.`)});const a=document.getElementById("quickOrderModal"),f=document.getElementById("openQuickOrderBtn"),v=document.getElementById("closeQuickOrderBtn"),u=document.getElementById("quickOrderForm");f==null||f.addEventListener("click",()=>{a==null||a.classList.add("is-open")}),v==null||v.addEventListener("click",()=>{a==null||a.classList.remove("is-open")}),a==null||a.addEventListener("click",e=>{e.target===a&&a.classList.remove("is-open")}),u==null||u.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(u),n=p.filter(d=>s[d.id]>0).map(d=>`${d.model} — ${s[d.id]} шт.`);alert(`Дякуємо, ${t.get("name")}!

Ваше замовлення:
${n.join(`
`)}

Сума: ${r.textContent} грн.

Ми зателефонуємо на ${t.get("phone")}.`),u.reset(),a==null||a.classList.remove("is-open")})}O();
