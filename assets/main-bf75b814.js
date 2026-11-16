(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function f(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=f(t);fetch(t.href,n)}})();const w="/bee-in-ua/assets/bh1-33a33373.webp",S="/bee-in-ua/assets/bh4-ebc6ce21.webp",q="/bee-in-ua/assets/datchik-temperatury-vlazhnost-0f6254f2.webp",$="/bee-in-ua/assets/datchik-temperatury-66799e8d.webp",B="/bee-in-ua/assets/platforma-5e86a49e.webp",I="/bee-in-ua/assets/tenzo-sensor-ffea00c8.webp",k="/bee-in-ua/assets/solar-panel-169185f9.webp";document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".burger-btn"),r=document.querySelector(".header-menu-wrapper"),f=document.querySelectorAll(".lang-btn");d&&r&&(d.addEventListener("click",i=>{i.stopPropagation();const t=d.classList.toggle("open");r.classList.toggle("open"),d.setAttribute("aria-expanded",t)}),r.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{d.classList.remove("open"),r.classList.remove("open"),d.setAttribute("aria-expanded","false")})}),document.addEventListener("click",i=>{!i.target.closest(".main-header")&&r.classList.contains("open")&&(d.classList.remove("open"),r.classList.remove("open"),d.setAttribute("aria-expanded","false"))})),f.forEach(i=>{i.addEventListener("click",()=>{f.forEach(t=>t.classList.remove("active")),i.classList.add("active")})})});const L=[{id:1,model:"BH_01",title:"Монітор медозбору на 1 вулик",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.",price:6450,img:w},{id:2,model:"BH-04",title:"Монітор медозбору на 4 вулики",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.",price:7250,img:S},{id:3,model:"BH-STH1",title:"Датчик температури та вологості всередині вулика",desc:"Довжина кабелю 1,5м.",price:350,img:q},{id:4,model:"BH-ST1",title:"Датчик температури ззовні",desc:"Довжина кабелю 1м.",price:220,img:$},{id:5,model:"BH-SM1",title:"Вагова платформа з тензодатчиком 200кг",desc:"Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.",price:4750,img:B},{id:6,model:"BH-SM3",title:"Тензодатчик 200кг з кріпежем та регульованими ніжками",desc:"Довжина кабелю 1,5м.",price:2750,img:I},{id:8,model:"AX-10P",title:"Сонячна батарея 4,2Вт 120х200мм",desc:"Автономне живлення для монітора медозбору.",price:600,img:k}],x={"bh01-platform":{title:"Купити пасічні ваги BH-01 + платформа",quantities:{1:1,3:1,4:1,5:1,8:1}},"bh04-platforms":{title:"Купити пасічні ваги BH-04 + платформи",quantities:{2:1,3:1,4:1,5:4,8:1}},"bh01-sensor":{title:"Купити пасічні ваги BH-01 + датчик",quantities:{1:1,3:1,4:1,6:1,8:1}},"bh04-sensors":{title:"Купити пасічні ваги BH-04 + датчики",quantities:{2:1,3:1,4:1,6:4,8:1}}};function A(){const d=document.getElementById("productList");if(!d)return;const r=document.getElementById("grandTotal"),f=document.getElementById("totalItems"),i=document.getElementById("checkoutBtn"),t=document.querySelector(".price-title"),n={};L.forEach(e=>{n[e.id]=0});const g=new URLSearchParams(window.location.search).get("set"),c=x[g];d.innerHTML=L.map(e=>`
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
    `).join(""),c&&(t&&(t.textContent=c.title),Object.entries(c.quantities).forEach(([e,s])=>{n[Number(e)]=s;const u=document.getElementById(`qty-${e}`);u&&(u.value=s)}));function o(e,s){let u=parseInt(s,10);(isNaN(u)||u<0)&&(u=0),u>999&&(u=999),n[e]=u;const m=document.getElementById(`qty-${e}`);m&&(m.value=u),a()}function a(){let e=0,s=0;L.forEach(u=>{const m=n[u.id]||0,y=m*u.price;e+=y,s+=m;const E=document.getElementById(`sub-${u.id}`);E&&(E.textContent=`${y.toLocaleString("uk-UA")} грн.`)}),r.textContent=e.toLocaleString("uk-UA"),f.textContent=s,i.disabled=s===0}a(),d.addEventListener("click",e=>{const s=e.target.closest(".price-qty-btn");if(!s)return;const u=Number(s.dataset.id),m=s.dataset.action==="inc"?1:-1;o(u,Math.max(0,(n[u]||0)+m))}),d.addEventListener("input",e=>{if(!e.target.classList.contains("price-qty-input"))return;const s=Number(e.target.dataset.id);o(s,e.target.value)}),i==null||i.addEventListener("click",()=>{const e=L.filter(s=>n[s.id]>0).map(s=>`${s.model} — ${n[s.id]} шт. = ${(n[s.id]*s.price).toLocaleString("uk-UA")} грн.`);alert(`Ваше замовлення:

${e.join(`
`)}

Разом: ${r.textContent} грн.`)});const l=document.getElementById("quickOrderModal"),h=document.getElementById("openQuickOrderBtn"),v=document.getElementById("closeQuickOrderBtn"),b=document.getElementById("quickOrderForm");h==null||h.addEventListener("click",()=>{l==null||l.classList.add("is-open")}),v==null||v.addEventListener("click",()=>{l==null||l.classList.remove("is-open")}),l==null||l.addEventListener("click",e=>{e.target===l&&l.classList.remove("is-open")}),b==null||b.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(b),u=L.filter(m=>n[m.id]>0).map(m=>`${m.model} — ${n[m.id]} шт.`);alert(`Дякуємо, ${s.get("name")}!

Ваше замовлення:
${u.join(`
`)}

Сума: ${r.textContent} грн.

Ми зателефонуємо на ${s.get("phone")}.`),b.reset(),l==null||l.classList.remove("is-open")})}A();document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".main-header"),r=window.location.pathname;document.querySelectorAll(".main-header .main-link").forEach(c=>{const o=c.getAttribute("href");if(!o)return;const a=o.replace(/^(\.\.\/|\.\/)+/,"");if(r.includes("/articles-pages/")&&a==="articles.html"){c.classList.add("active");return}const l=r.endsWith("/")||r.endsWith("/index.html")||r.endsWith("/bee-in-ua");(a==="index.html"&&l||a!=="index.html"&&r.endsWith(a))&&c.classList.add("active")});let i=document.querySelector(".header-scroll-progress");!i&&d&&(i=document.createElement("div"),i.className="header-scroll-progress",d.appendChild(i));const t=document.querySelector(".back-top"),n=()=>{const c=window.scrollY||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight,a=o>0?Math.min(100,c/o*100):0;i&&(i.style.width=`${a}%`),d&&d.classList.toggle("is-scrolled",c>20),t&&t.classList.toggle("visible",c>350)};window.addEventListener("scroll",n,{passive:!0}),n(),t&&t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",o=>{const a=c.getAttribute("href");if(!a||a==="#")return;const l=document.querySelector(a);if(l){o.preventDefault();const h=80,v=l.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:v-h,behavior:"smooth"})}})});const p=document.querySelector(".main-header .burger-btn"),g=document.querySelector(".main-header .header-menu-wrapper");if(p&&g){const c=(o=!1)=>{const a=o?!1:!g.classList.contains("is-open");g.classList.toggle("is-open",a),g.classList.toggle("active",a),p.classList.toggle("is-open",a),p.classList.toggle("active",a),p.setAttribute("aria-expanded",String(a)),document.body.style.overflow=a?"hidden":""};p.addEventListener("click",o=>{o.stopPropagation(),c()}),g.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>c(!0))}),document.addEventListener("click",o=>{g.classList.contains("is-open")&&!g.contains(o.target)&&!p.contains(o.target)&&c(!0)}),document.addEventListener("keydown",o=>{o.key==="Escape"&&g.classList.contains("is-open")&&c(!0)}),window.addEventListener("resize",()=>{window.innerWidth>=1200&&g.classList.contains("is-open")&&c(!0)})}});
