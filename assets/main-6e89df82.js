(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))v(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const $ of i.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&v($)}).observe(document,{childList:!0,subtree:!0});function A(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function v(c){if(c.ep)return;c.ep=!0;const i=A(c);fetch(c.href,i)}})();const _="/bee-in-ua/assets/bh1-33a33373.webp",W="/bee-in-ua/assets/bh4-ebc6ce21.webp",z="/bee-in-ua/assets/datchik-temperatury-vlazhnost-0f6254f2.webp",R="/bee-in-ua/assets/datchik-temperatury-66799e8d.webp",U="/bee-in-ua/assets/platforma-5e86a49e.webp",G="/bee-in-ua/assets/tenzo-sensor-ffea00c8.webp",Y="/bee-in-ua/assets/solar-panel-169185f9.webp",C=[{id:1,model:"BH_01",title:"Монітор медозбору на 1 вулик",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.",price:6450,img:_},{id:2,model:"BH-04",title:"Монітор медозбору на 4 вулики",desc:"Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.",price:7250,img:W},{id:3,model:"BH-STH1",title:"Датчик температури та вологості всередині вулика",desc:"Довжина кабелю 1,5м.",price:350,img:z},{id:4,model:"BH-ST1",title:"Датчик температури ззовні",desc:"Довжина кабелю 1м.",price:220,img:R},{id:5,model:"BH-SM1",title:"Вагова платформа з тензодатчиком 200кг",desc:"Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.",price:4750,img:U},{id:6,model:"BH-SM3",title:"Тензодатчик 200кг з кріпежем та регульованими ніжками",desc:"Довжина кабелю 1,5м.",price:2750,img:G},{id:8,model:"AX-10P",title:"Сонячна батарея 4,2Вт 120х200мм",desc:"Автономне живлення для монітора медозбору.",price:600,img:Y}],Q={"bh01-platform":{title:"Купити пасічні ваги BH-01 + платформа",quantities:{1:1,3:1,4:1,5:1,8:1}},"bh04-platforms":{title:"Купити пасічні ваги BH-04 + платформи",quantities:{2:1,3:1,4:1,5:4,8:1}},"bh01-sensor":{title:"Купити пасічні ваги BH-01 + датчик",quantities:{1:1,3:1,4:1,6:1,8:1}},"bh04-sensors":{title:"Купити пасічні ваги BH-04 + датчики",quantities:{2:1,3:1,4:1,6:4,8:1}}};function X(){const b=document.getElementById("productList");if(!b)return;const u=document.getElementById("grandTotal"),A=document.getElementById("totalItems"),v=document.getElementById("checkoutBtn"),c=document.querySelector(".price-title"),i={};C.forEach(o=>{i[o.id]=0});const B=new URLSearchParams(window.location.search).get("set"),g=Q[B];b.innerHTML=C.map(o=>`
      <div class="price-product-card" data-id="${o.id}">
        <div class="price-img-wrap">
          <img src="${o.img}" alt="${o.title}" loading="lazy">
        </div>
        <div class="price-product-info">
          <div class="price-product-text-col">
            <div class="price-product-title">${o.title}</div>
            <div class="price-product-desc">${o.desc}</div>
          </div>
          <span class="price-product-model">${o.model}</span>
        </div>
        <div class="price-product-controls">
          <div class="price-unit">
            <span>Ціна: </span>
            <strong>${o.price.toLocaleString("uk-UA")} грн.</strong>
          </div>
          <div class="price-qty-control">
            <button type="button" class="price-qty-btn" data-action="dec" data-id="${o.id}">−</button>
            <input type="number" class="price-qty-input" id="qty-${o.id}" data-id="${o.id}" value="0" min="0" max="999">
            <button type="button" class="price-qty-btn" data-action="inc" data-id="${o.id}">+</button>
          </div>
          <div class="price-row-subtotal">
            <span>Разом:</span>
            <span id="sub-${o.id}">0 грн.</span>
          </div>
        </div>
      </div>
    `).join(""),g&&(c&&(c.textContent=g.title),Object.entries(g.quantities).forEach(([o,t])=>{i[Number(o)]=t;const e=document.getElementById(`qty-${o}`);e&&(e.value=t)}));function p(o,t){let e=parseInt(t,10);(isNaN(e)||e<0)&&(e=0),e>999&&(e=999),i[o]=e;const l=document.getElementById(`qty-${o}`);l&&(l.value=e),r()}function r(){let o=0,t=0;C.forEach(e=>{const l=i[e.id]||0,h=l*e.price;o+=h,t+=l;const d=document.getElementById(`sub-${e.id}`);d&&(d.textContent=`${h.toLocaleString("uk-UA")} грн.`)}),u.textContent=o.toLocaleString("uk-UA"),A.textContent=t,v.disabled=t===0}r(),b.addEventListener("click",o=>{const t=o.target.closest(".price-qty-btn");if(!t)return;const e=Number(t.dataset.id),l=t.dataset.action==="inc"?1:-1;p(e,Math.max(0,(i[e]||0)+l))}),b.addEventListener("input",o=>{if(!o.target.classList.contains("price-qty-input"))return;const t=Number(o.target.dataset.id);p(t,o.target.value)}),v==null||v.addEventListener("click",()=>{const o=C.filter(t=>i[t.id]>0).map(t=>`${t.model} — ${i[t.id]} шт. = ${(i[t.id]*t.price).toLocaleString("uk-UA")} грн.`);alert(`Ваше замовлення:

${o.join(`
`)}

Разом: ${u.textContent} грн.`)});const n=document.getElementById("quickOrderModal"),s=document.getElementById("openQuickOrderBtn"),f=document.getElementById("closeQuickOrderBtn"),E=document.getElementById("quickOrderForm");s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("is-open")),f==null||f.addEventListener("click",()=>n==null?void 0:n.classList.remove("is-open")),n==null||n.addEventListener("click",o=>{o.target===n&&n.classList.remove("is-open")}),E==null||E.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(E),e=C.filter(l=>i[l.id]>0).map(l=>`${l.model} — ${i[l.id]} шт.`);alert(`Дякуємо, ${t.get("name")}!

Ваше замовлення:
${e.join(`
`)}

Сума: ${u.textContent} грн.

Ми зателефонуємо на ${t.get("phone")}.`),E.reset(),n==null||n.classList.remove("is-open")})}function V(){const b=document.querySelector(".main-header"),u=window.location.pathname;document.querySelectorAll(".main-header .main-link").forEach(r=>{const n=r.getAttribute("href");if(!n)return;const s=n.replace(/^(\.\.\/|\.\/)+/,"");if(u.includes("/articles-pages/")&&s==="articles.html"){r.classList.add("active");return}if(u.endsWith("demo-hive.html")&&s==="demo.html"){r.classList.add("active");return}const f=u.endsWith("/")||u.endsWith("/index.html")||u.endsWith("/bee-in-ua");(s==="index.html"&&f||s!=="index.html"&&u.endsWith(s))&&r.classList.add("active")});const v=document.querySelectorAll(".main-header .lang-btn");v.forEach(r=>{r.addEventListener("click",()=>{v.forEach(n=>n.classList.remove("active")),r.classList.add("active")})});let c=document.querySelector(".progress-bar");c||(c=document.createElement("div"),c.className="progress-bar",document.body.appendChild(c));let i=document.querySelector(".back-top");const $=document.querySelector(".price-page, .sms-page, .bh-sms-wrapper, .stats-list, .articles-list, .article-page, .demo-dashboard");!i&&$&&(i=document.createElement("button"),i.type="button",i.className="back-top",i.setAttribute("aria-label","Повернутися нагору"),i.textContent="↑",document.body.appendChild(i));const B=()=>{const r=window.scrollY||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=n>0?Math.min(100,r/n*100):0;c&&(c.style.width=`${s}%`),b&&b.classList.toggle("is-scrolled",r>20),i&&i.classList.toggle("visible",r>300)};window.addEventListener("scroll",B,{passive:!0}),B(),i&&i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",n=>{const s=r.getAttribute("href");if(!s||s==="#")return;const f=document.querySelector(s);if(f){n.preventDefault();const E=80,o=f.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o-E,behavior:"smooth"})}})});const g=document.querySelector(".main-header .burger-btn"),p=document.querySelector(".main-header .header-menu-wrapper");if(g&&p){const r=(n=!1)=>{const s=n?!1:!p.classList.contains("is-open");p.classList.toggle("is-open",s),p.classList.toggle("active",s),p.classList.toggle("open",s),g.classList.toggle("is-open",s),g.classList.toggle("active",s),g.classList.toggle("open",s),g.setAttribute("aria-expanded",String(s)),document.body.style.overflow=s?"hidden":""};g.addEventListener("click",n=>{n.stopPropagation(),r()}),p.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>r(!0))}),document.addEventListener("click",n=>{p.classList.contains("is-open")&&!p.contains(n.target)&&!g.contains(n.target)&&r(!0)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&p.classList.contains("is-open")&&r(!0)}),window.addEventListener("resize",()=>{window.innerWidth>=1200&&p.classList.contains("is-open")&&r(!0)})}}function K(){const b=document.getElementById("weightChartBox"),u=document.getElementById("climateChartBox");if(!b&&!u)return;const A={"24h":{labels:Array.of("23:16","02:16","05:16","08:16","11:16","14:16","17:16","20:16","23:16"),values:Array.of(61.88,61.82,61.75,62.1,62.65,63.2,63.78,64.12,64.28),min:61.5,max:64.6},"7d":{labels:Array.of("Пн","Вт","Ср","Чт","Пт","Сб","Нд"),values:Array.of(53.4,55.1,56.8,58.2,60.1,61.9,64.28),min:52,max:66},"30d":{labels:Array.of("1 тиж","2 тиж","3 тиж","4 тиж","Зараз"),values:Array.of(38.5,44.2,51,57.6,64.28),min:35,max:67}},v={"24h":{labels:Array.of("23:16","03:16","07:16","11:16","15:16","19:16","23:16"),indoor:Array.of(34.2,34,34.3,34.7,35.1,34.8,34.6),outdoor:Array.of(16.5,14.2,17.8,24.5,28.4,25.1,23.5),humidity:Array.of(64,68,61,49,44,50,53)},"7d":{labels:Array.of("Пн","Вт","Ср","Чт","Пт","Сб","Нд"),indoor:Array.of(34.4,34.5,34.3,34.6,34.8,34.7,34.6),outdoor:Array.of(21,22.4,19.8,23.1,25.6,24.2,23.5),humidity:Array.of(58,55,62,54,48,51,53)},"30d":{labels:Array.of("1 тиж","2 тиж","3 тиж","4 тиж","Зараз"),indoor:Array.of(34.1,34.3,34.5,34.7,34.6),outdoor:Array.of(18.5,20.2,22.8,24.9,23.5),humidity:Array.of(60,57,52,50,53)}};function c(t="24h"){const e=A[t];if(!b||!e)return;const l=500,h=215,d=42,L=16,x=16,M=28,H=l-d-L,y=h-x-M,S=a=>d+a/(e.values.length-1)*H,k=a=>x+y-(a-e.min)/(e.max-e.min)*y,I=e.values.map((a,m)=>`${S(m).toFixed(1)},${k(a).toFixed(1)}`).join(" "),F=`${d},${x+y} ${I} ${d+H},${x+y}`,N=Array.of(0,.25,.5,.75,1).map(a=>{const m=(e.min+a*(e.max-e.min)).toFixed(1),w=(x+y-a*y).toFixed(1);return`
          <line x1="${d}" y1="${w}" x2="${l-L}" y2="${w}" stroke="#F1E6D0" stroke-dasharray="3 3" />
          <text x="${d-8}" y="${Number(w)+4}" text-anchor="end" font-size="11" fill="#806C52">${m}</text>
        `}).join(""),P=e.labels.map((a,m)=>`<text x="${S(m).toFixed(1)}" y="${h-6}" text-anchor="middle" font-size="11" fill="#806C52">${a}</text>`).join(""),q=e.values.map((a,m)=>`
          <g>
            <circle cx="${S(m).toFixed(1)}" cy="${k(a).toFixed(1)}" r="4.5" fill="#FFC21A" stroke="#57432B" stroke-width="2">
              <title>${e.labels[m]}: ${a.toFixed(2)} кг</title>
            </circle>
          </g>
        `).join("");b.innerHTML=`
      <svg viewBox="0 0 ${l} ${h}" role="img" aria-label="Графік динаміки ваги">
        <defs>
          <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFC21A" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#FFC21A" stop-opacity="0.02" />
          </linearGradient>
        </defs>
        ${N}
        <polygon points="${F}" fill="url(#weightGrad)" />
        <polyline points="${I}" fill="none" stroke="#E9A900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        ${q}
        ${P}
      </svg>
    `}function i(t="24h"){const e=v[t];if(!u||!e)return;const l=500,h=215,d=36,L=36,x=16,M=28,H=l-d-L,y=h-x-M,S=a=>d+a/(e.labels.length-1)*H,k=a=>x+y-(a-10)/32*y,I=a=>x+y-a/100*y,F=(a,m)=>a.map((w,T)=>`${S(T).toFixed(1)},${m(w).toFixed(1)}`).join(" "),N=Array.of(0,.25,.5,.75,1).map(a=>{const m=(x+y-a*y).toFixed(1),w=Math.round(10+a*32),T=Math.round(a*100);return`
          <line x1="${d}" y1="${m}" x2="${l-L}" y2="${m}" stroke="#F1E6D0" stroke-dasharray="3 3" />
          <text x="${d-6}" y="${Number(m)+4}" text-anchor="end" font-size="10.5" fill="#806C52">${w}°</text>
          <text x="${l-L+6}" y="${Number(m)+4}" text-anchor="start" font-size="10.5" fill="#3B82F6">${T}%</text>
        `}).join(""),P=e.labels.map((a,m)=>`<text x="${S(m).toFixed(1)}" y="${h-6}" text-anchor="middle" font-size="11" fill="#806C52">${a}</text>`).join(""),q=(a,m,w,T)=>a.map((j,D)=>`
            <circle cx="${S(D).toFixed(1)}" cy="${m(j).toFixed(1)}" r="3.5" fill="${w}">
              <title>${e.labels[D]}: ${j}${T}</title>
            </circle>
          `).join("");u.innerHTML=`
      <svg viewBox="0 0 ${l} ${h}" role="img" aria-label="Графік мікроклімату">
        ${N}
        <polyline points="${F(e.humidity,I)}" fill="none" stroke="#3B82F6" stroke-width="2.5" stroke-dasharray="5 3" />
        <polyline points="${F(e.outdoor,k)}" fill="none" stroke="#F59E0B" stroke-width="2.5" />
        <polyline points="${F(e.indoor,k)}" fill="none" stroke="#EF4444" stroke-width="3" />
        ${q(e.humidity,I,"#3B82F6","%")}
        ${q(e.outdoor,k,"#F59E0B","°C")}
        ${q(e.indoor,k,"#EF4444","°C")}
        ${P}
      </svg>
    `}c("24h"),i("24h"),document.querySelectorAll(".demo-period-tabs").forEach(t=>{t.addEventListener("click",e=>{const l=e.target.closest(".period-btn");if(!l)return;t.querySelectorAll(".period-btn").forEach(d=>d.classList.remove("active")),l.classList.add("active");const h=l.dataset.period;t.dataset.chart==="weight"&&c(h),t.dataset.chart==="climate"&&i(h)})});const $=document.getElementById("demoSyncBtn"),B=document.getElementById("demoSyncTime"),g=document.getElementById("demoEventsList");let p=64.28,r=2.4;$==null||$.addEventListener("click",()=>{$.classList.add("is-syncing"),setTimeout(()=>{$.classList.remove("is-syncing");const t=+(Math.random()*.14+.02).toFixed(2);p=+(p+t).toFixed(2),r=+(r+t).toFixed(2);const e=document.getElementById("metricWeight"),l=document.getElementById("metricDaily");e&&(e.innerHTML=`${p.toFixed(2).replace(".",",")} <small>кг</small>`),l&&(l.innerHTML=`+${r.toFixed(2).replace(".",",")} <small>кг</small>`);const d=new Date().toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});if(B&&(B.textContent=`Оновлено о ${d}`),g){const L=document.createElement("li");L.className="event-item",L.innerHTML=`
          <span class="event-badge ok">✓</span>
          <div class="event-body">
            <strong>Синхронізовано: вага ${p.toFixed(2).replace(".",",")} кг (+${t.toFixed(2).replace(".",",")} кг)</strong>
            <span>Щойно (${d})</span>
          </div>
        `,g.prepend(L)}},550)});const n=document.getElementById("demoIntervalSelect"),s=document.getElementById("demoAlertsToggle"),f=document.getElementById("demoReportToggle"),E=document.getElementById("demoSystemStatus"),o=document.getElementById("dailyReportEvent");if(n){const t=localStorage.getItem("bh_demo_interval");t&&(n.value=t),n.addEventListener("change",()=>{localStorage.setItem("bh_demo_interval",n.value)})}if(s&&E){const t=localStorage.getItem("bh_demo_alerts");t!==null&&(s.checked=t==="true");const e=()=>{localStorage.setItem("bh_demo_alerts",String(s.checked)),E.classList.toggle("is-alert",!s.checked),E.innerHTML=s.checked?" Усі системи в нормі":" Аварійні сповіщення вимкнено"};s.addEventListener("change",e),e()}if(f&&o){const t=localStorage.getItem("bh_demo_report");t!==null&&(f.checked=t==="true");const e=()=>{localStorage.setItem("bh_demo_report",String(f.checked)),o.classList.toggle("is-hidden",!f.checked)};f.addEventListener("change",e),e()}}function O(){X(),V(),K()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O):O();
