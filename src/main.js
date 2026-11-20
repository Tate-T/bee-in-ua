// =====================================
// ИЗОБРАЖЕНИЯ ТОВАРОВ
// =====================================

import bh01Img from './img/fon/bh1.webp';
import bh04Img from './img/fon/bh4.webp';
import bhSth1Img from './img/fon/datchik-temperatury-vlazhnost.webp';
import bhSt1Img from './img/fon/datchik-temperatury.webp';
import bhSm1Img from './img/fon/platforma.webp';
import bhSm3Img from './img/fon/tenzo-sensor.webp';
import ax10pImg from './img/fon/solar-panel.webp';

// =====================================
// СПИСОК ТОВАРОВ
// =====================================

const products = [
  {
    id: 1,
    model: 'BH_01',
    title: 'Монітор медозбору на 1 вулик',
    desc: 'Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 1 датчик ваги.',
    price: 6450,
    img: bh01Img,
  },
  {
    id: 2,
    model: 'BH-04',
    title: 'Монітор медозбору на 4 вулики',
    desc: 'Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.',
    price: 7250,
    img: bh04Img,
  },
  {
    id: 3,
    model: 'BH-STH1',
    title: 'Датчик температури та вологості всередині вулика',
    desc: 'Довжина кабелю 1,5м.',
    price: 350,
    img: bhSth1Img,
  },
  {
    id: 4,
    model: 'BH-ST1',
    title: 'Датчик температури ззовні',
    desc: 'Довжина кабелю 1м.',
    price: 220,
    img: bhSt1Img,
  },
  {
    id: 5,
    model: 'BH-SM1',
    title: 'Вагова платформа з тензодатчиком 200кг',
    desc: 'Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.',
    price: 4750,
    img: bhSm1Img,
  },
  {
    id: 6,
    model: 'BH-SM3',
    title: 'Тензодатчик 200кг з кріпежем та регульованими ніжками',
    desc: 'Довжина кабелю 1,5м.',
    price: 2750,
    img: bhSm3Img,
  },
  {
    id: 8,
    model: 'AX-10P',
    title: 'Сонячна батарея 4,2Вт 120х200мм',
    desc: 'Автономне живлення для монітора медозбору.',
    price: 600,
    img: ax10pImg,
  },
];

// =====================================
// ГОТОВЫЕ КОМПЛЕКТЫ
// =====================================

const presetSets = {
  'bh01-platform': {
    title: 'Купити пасічні ваги BH-01 + платформа',
    quantities: { 1: 1, 3: 1, 4: 1, 5: 1, 8: 1 },
  },
  'bh04-platforms': {
    title: 'Купити пасічні ваги BH-04 + платформи',
    quantities: { 2: 1, 3: 1, 4: 1, 5: 4, 8: 1 },
  },
  'bh01-sensor': {
    title: 'Купити пасічні ваги BH-01 + датчик',
    quantities: { 1: 1, 3: 1, 4: 1, 6: 1, 8: 1 },
  },
  'bh04-sensors': {
    title: 'Купити пасічні ваги BH-04 + датчики',
    quantities: { 2: 1, 3: 1, 4: 1, 6: 4, 8: 1 },
  },
};

// =====================================
// КАЛЬКУЛЯТОР ЦЕН
// =====================================

function initPriceCalculator() {
  const productListEl = document.getElementById('productList');
  if (!productListEl) return;

  const grandTotalEl = document.getElementById('grandTotal');
  const totalItemsEl = document.getElementById('totalItems');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const priceTitle = document.querySelector('.price-title');

  const cart = {};
  products.forEach((p) => {
    cart[p.id] = 0;
  });

  const urlParams = new URLSearchParams(window.location.search);
  const selectedSet = urlParams.get('set');
  const preset = presetSets[selectedSet];

  productListEl.innerHTML = products
    .map(
      (p) => `
      <div class="price-product-card" data-id="${p.id}">
        <div class="price-img-wrap">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="price-product-info">
          <div class="price-product-text-col">
            <div class="price-product-title">${p.title}</div>
            <div class="price-product-desc">${p.desc}</div>
          </div>
          <span class="price-product-model">${p.model}</span>
        </div>
        <div class="price-product-controls">
          <div class="price-unit">
            <span>Ціна: </span>
            <strong>${p.price.toLocaleString('uk-UA')} грн.</strong>
          </div>
          <div class="price-qty-control">
            <button type="button" class="price-qty-btn" data-action="dec" data-id="${p.id}">−</button>
            <input type="number" class="price-qty-input" id="qty-${p.id}" data-id="${p.id}" value="0" min="0" max="999">
            <button type="button" class="price-qty-btn" data-action="inc" data-id="${p.id}">+</button>
          </div>
          <div class="price-row-subtotal">
            <span>Разом:</span>
            <span id="sub-${p.id}">0 грн.</span>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  if (preset) {
    if (priceTitle) {
      priceTitle.textContent = preset.title;
    }
    Object.entries(preset.quantities).forEach(([id, qty]) => {
      cart[Number(id)] = qty;
      const input = document.getElementById(`qty-${id}`);
      if (input) {
        input.value = qty;
      }
    });
  }

  function setQty(id, value) {
    let qty = parseInt(value, 10);
    if (isNaN(qty) || qty < 0) qty = 0;
    if (qty > 999) qty = 999;

    cart[id] = qty;
    const inputEl = document.getElementById(`qty-${id}`);
    if (inputEl) {
      inputEl.value = qty;
    }
    calculateTotal();
  }

  function calculateTotal() {
    let totalSum = 0;
    let totalCount = 0;

    products.forEach((p) => {
      const qty = cart[p.id] || 0;
      const subtotal = qty * p.price;
      totalSum += subtotal;
      totalCount += qty;

      const subEl = document.getElementById(`sub-${p.id}`);
      if (subEl) {
        subEl.textContent = `${subtotal.toLocaleString('uk-UA')} грн.`;
      }
    });

    grandTotalEl.textContent = totalSum.toLocaleString('uk-UA');
    totalItemsEl.textContent = totalCount;
    checkoutBtn.disabled = totalCount === 0;
  }

  calculateTotal();

  productListEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.price-qty-btn');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const delta = btn.dataset.action === 'inc' ? 1 : -1;
    setQty(id, Math.max(0, (cart[id] || 0) + delta));
  });

  productListEl.addEventListener('input', (e) => {
    if (!e.target.classList.contains('price-qty-input')) return;
    const id = Number(e.target.dataset.id);
    setQty(id, e.target.value);
  });

  checkoutBtn?.addEventListener('click', () => {
    const selected = products
      .filter((p) => cart[p.id] > 0)
      .map(
        (p) =>
          `${p.model} — ${cart[p.id]} шт. = ${(cart[p.id] * p.price).toLocaleString('uk-UA')} грн.`
      );

    alert(
      `Ваше замовлення:\n\n${selected.join('\n')}\n\nРазом: ${grandTotalEl.textContent} грн.`
    );
  });

  const modal = document.getElementById('quickOrderModal');
  const openModalBtn = document.getElementById('openQuickOrderBtn');
  const closeModalBtn = document.getElementById('closeQuickOrderBtn');
  const quickOrderForm = document.getElementById('quickOrderForm');

  openModalBtn?.addEventListener('click', () => modal?.classList.add('is-open'));
  closeModalBtn?.addEventListener('click', () => modal?.classList.remove('is-open'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('is-open');
  });

  quickOrderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(quickOrderForm);
    const selected = products
      .filter((p) => cart[p.id] > 0)
      .map((p) => `${p.model} — ${cart[p.id]} шт.`);

    alert(
      `Дякуємо, ${formData.get('name')}!\n\n` +
        `Ваше замовлення:\n${selected.join('\n')}\n\n` +
        `Сума: ${grandTotalEl.textContent} грн.\n\n` +
        `Ми зателефонуємо на ${formData.get('phone')}.`
    );

    quickOrderForm.reset();
    modal?.classList.remove('is-open');
  });
}
// =====================================
// НАВИГАЦИЯ, ПРОКРУТКА И КНОПКА НАВЕРХ
// =====================================

function initNavigationAndScroll() {
  const header = document.querySelector('.main-header');

  // 1. Автоматическая подсветка активного пункта меню
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-header .main-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const cleanHref = href.replace(/^(\.\.\/|\.\/)+/, '');

    if (currentPath.includes('/articles-pages/') && cleanHref === 'articles.html') {
      link.classList.add('active');
      return;
    }

    if (currentPath.endsWith('demo-hive.html') && cleanHref === 'demo.html') {
      link.classList.add('active');
      return;
    }

    const isHomePage =
      currentPath.endsWith('/') ||
      currentPath.endsWith('/index.html') ||
      currentPath.endsWith('/bee-in-ua');

    if (cleanHref === 'index.html' && isHomePage) {
      link.classList.add('active');
    } else if (cleanHref !== 'index.html' && currentPath.endsWith(cleanHref)) {
      link.classList.add('active');
    }
  });

  // 2. Переключение активной кнопки языка
  const langBtns = document.querySelectorAll('.main-header .lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      langBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // 3. Жёлтая полоска прогресса в самом верху экрана и кнопка возврата наверх
  let progressBar = document.querySelector('.progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
  }

  let backTopBtn = document.querySelector('.back-top');
  const needsBackTop = document.querySelector(
    '.price-page, .sms-page, .bh-sms-wrapper, .stats-list, .articles-list, .article-page, .demo-dashboard'
  );

  if (!backTopBtn && needsBackTop) {
    backTopBtn = document.createElement('button');
    backTopBtn.type = 'button';
    backTopBtn.className = 'back-top';
    backTopBtn.setAttribute('aria-label', 'Повернутися нагору');
    backTopBtn.textContent = '↑';
    document.body.appendChild(backTopBtn);
  }

  const updateScrollUI = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (header) {
      header.classList.toggle('is-scrolled', scrollTop > 20);
    }

    if (backTopBtn) {
      backTopBtn.classList.toggle('visible', scrollTop > 300);
    }
  };

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  // 4. Плавная прокрутка наверх и по якорным ссылкам
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });
      }
    });
  });

  // 5. Управление бургер-меню на смартфонах и планшетах
  const burgerBtn = document.querySelector('.main-header .burger-btn');
  const menuWrapper = document.querySelector('.main-header .header-menu-wrapper');

  if (burgerBtn && menuWrapper) {
    const toggleMenu = (forceClose = false) => {
      const isOpen = forceClose ? false : !menuWrapper.classList.contains('is-open');

      menuWrapper.classList.toggle('is-open', isOpen);
      menuWrapper.classList.toggle('active', isOpen);
      menuWrapper.classList.toggle('open', isOpen);
      burgerBtn.classList.toggle('is-open', isOpen);
      burgerBtn.classList.toggle('active', isOpen);
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    burgerBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMenu();
    });

    menuWrapper.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', () => toggleMenu(true));
    });

    document.addEventListener('click', (event) => {
      if (
        menuWrapper.classList.contains('is-open') &&
        !menuWrapper.contains(event.target) &&
        !burgerBtn.contains(event.target)
      ) {
        toggleMenu(true);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuWrapper.classList.contains('is-open')) {
        toggleMenu(true);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200 && menuWrapper.classList.contains('is-open')) {
        toggleMenu(true);
      }
    });
  }
}
// =====================================
// ГРАФІКИ ТА ІНТЕРАКТИВ ДЛЯ DEMO-HIVE.HTML
// =====================================

function initDemoHiveCharts() {
  const weightBox = document.getElementById('weightChartBox');
  const climateBox = document.getElementById('climateChartBox');
  if (!weightBox && !climateBox) return;

  const weightDatasets = {
    '24h': {
      labels: Array.of('23:16', '02:16', '05:16', '08:16', '11:16', '14:16', '17:16', '20:16', '23:16'),
      values: Array.of(61.88, 61.82, 61.75, 62.10, 62.65, 63.20, 63.78, 64.12, 64.28),
      min: 61.5,
      max: 64.6,
    },
    '7d': {
      labels: Array.of('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'),
      values: Array.of(53.4, 55.1, 56.8, 58.2, 60.1, 61.9, 64.28),
      min: 52.0,
      max: 66.0,
    },
    '30d': {
      labels: Array.of('1 тиж', '2 тиж', '3 тиж', '4 тиж', 'Зараз'),
      values: Array.of(38.5, 44.2, 51.0, 57.6, 64.28),
      min: 35.0,
      max: 67.0,
    },
  };

  const climateDatasets = {
    '24h': {
      labels: Array.of('23:16', '03:16', '07:16', '11:16', '15:16', '19:16', '23:16'),
      indoor: Array.of(34.2, 34.0, 34.3, 34.7, 35.1, 34.8, 34.6),
      outdoor: Array.of(16.5, 14.2, 17.8, 24.5, 28.4, 25.1, 23.5),
      humidity: Array.of(64, 68, 61, 49, 44, 50, 53),
    },
    '7d': {
      labels: Array.of('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'),
      indoor: Array.of(34.4, 34.5, 34.3, 34.6, 34.8, 34.7, 34.6),
      outdoor: Array.of(21.0, 22.4, 19.8, 23.1, 25.6, 24.2, 23.5),
      humidity: Array.of(58, 55, 62, 54, 48, 51, 53),
    },
    '30d': {
      labels: Array.of('1 тиж', '2 тиж', '3 тиж', '4 тиж', 'Зараз'),
      indoor: Array.of(34.1, 34.3, 34.5, 34.7, 34.6),
      outdoor: Array.of(18.5, 20.2, 22.8, 24.9, 23.5),
      humidity: Array.of(60, 57, 52, 50, 53),
    },
  };

  function renderWeightChart(period = '24h') {
    const data = weightDatasets[period];
    if (!weightBox || !data) return;

    const w = 500;
    const h = 215;
    const padL = 42;
    const padR = 16;
    const padT = 16;
    const padB = 28;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const getX = (i) => padL + (i / (data.values.length - 1)) * plotW;
    const getY = (v) => padT + plotH - ((v - data.min) / (data.max - data.min)) * plotH;

    const points = data.values.map((v, i) => `${getX(i).toFixed(1)},${getY(v).toFixed(1)}`).join(' ');
    const areaPoints = `${padL},${padT + plotH} ${points} ${padL + plotW},${padT + plotH}`;

    const gridLines = Array.of(0, 0.25, 0.5, 0.75, 1)
      .map((t) => {
        const val = (data.min + t * (data.max - data.min)).toFixed(1);
        const y = (padT + plotH - t * plotH).toFixed(1);
        return `
          <line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#F1E6D0" stroke-dasharray="3 3" />
          <text x="${padL - 8}" y="${Number(y) + 4}" text-anchor="end" font-size="11" fill="#806C52">${val}</text>
        `;
      })
      .join('');

    const xLabels = data.labels
      .map(
        (lbl, i) =>
          `<text x="${getX(i).toFixed(1)}" y="${h - 6}" text-anchor="middle" font-size="11" fill="#806C52">${lbl}</text>`
      )
      .join('');

    const dots = data.values
      .map(
        (v, i) => `
          <g>
            <circle cx="${getX(i).toFixed(1)}" cy="${getY(v).toFixed(1)}" r="4.5" fill="#FFC21A" stroke="#57432B" stroke-width="2">
              <title>${data.labels[i]}: ${v.toFixed(2)} кг</title>
            </circle>
          </g>
        `
      )
      .join('');

    weightBox.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Графік динаміки ваги">
        <defs>
          <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFC21A" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#FFC21A" stop-opacity="0.02" />
          </linearGradient>
        </defs>
        ${gridLines}
        <polygon points="${areaPoints}" fill="url(#weightGrad)" />
        <polyline points="${points}" fill="none" stroke="#E9A900" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        ${dots}
        ${xLabels}
      </svg>
    `;
  }

  function renderClimateChart(period = '24h') {
    const data = climateDatasets[period];
    if (!climateBox || !data) return;

    const w = 500;
    const h = 215;
    const padL = 36;
    const padR = 36;
    const padT = 16;
    const padB = 28;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const getX = (i) => padL + (i / (data.labels.length - 1)) * plotW;
    const getTempY = (v) => padT + plotH - ((v - 10) / 32) * plotH;
    const getHumY = (v) => padT + plotH - (v / 100) * plotH;

    const makeLine = (arr, yFn) =>
      arr.map((v, i) => `${getX(i).toFixed(1)},${yFn(v).toFixed(1)}`).join(' ');

    const grid = Array.of(0, 0.25, 0.5, 0.75, 1)
      .map((t) => {
        const y = (padT + plotH - t * plotH).toFixed(1);
        const tempVal = Math.round(10 + t * 32);
        const humVal = Math.round(t * 100);
        return `
          <line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#F1E6D0" stroke-dasharray="3 3" />
          <text x="${padL - 6}" y="${Number(y) + 4}" text-anchor="end" font-size="10.5" fill="#806C52">${tempVal}°</text>
          <text x="${w - padR + 6}" y="${Number(y) + 4}" text-anchor="start" font-size="10.5" fill="#3B82F6">${humVal}%</text>
        `;
      })
      .join('');

    const xLabels = data.labels
      .map(
        (lbl, i) =>
          `<text x="${getX(i).toFixed(1)}" y="${h - 6}" text-anchor="middle" font-size="11" fill="#806C52">${lbl}</text>`
      )
      .join('');

    const makeDots = (arr, yFn, color, unit) =>
      arr
        .map(
          (v, i) => `
            <circle cx="${getX(i).toFixed(1)}" cy="${yFn(v).toFixed(1)}" r="3.5" fill="${color}">
              <title>${data.labels[i]}: ${v}${unit}</title>
            </circle>
          `
        )
        .join('');

    climateBox.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Графік мікроклімату">
        ${grid}
        <polyline points="${makeLine(data.humidity, getHumY)}" fill="none" stroke="#3B82F6" stroke-width="2.5" stroke-dasharray="5 3" />
        <polyline points="${makeLine(data.outdoor, getTempY)}" fill="none" stroke="#F59E0B" stroke-width="2.5" />
        <polyline points="${makeLine(data.indoor, getTempY)}" fill="none" stroke="#EF4444" stroke-width="3" />
        ${makeDots(data.humidity, getHumY, '#3B82F6', '%')}
        ${makeDots(data.outdoor, getTempY, '#F59E0B', '°C')}
        ${makeDots(data.indoor, getTempY, '#EF4444', '°C')}
        ${xLabels}
      </svg>
    `;
  }

  renderWeightChart('24h');
  renderClimateChart('24h');

  // Переключатели периодов (24 год / 7 днів / 30 днів)
  document.querySelectorAll('.demo-period-tabs').forEach((group) => {
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('.period-btn');
      if (!btn) return;
      group.querySelectorAll('.period-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const period = btn.dataset.period;
      if (group.dataset.chart === 'weight') renderWeightChart(period);
      if (group.dataset.chart === 'climate') renderClimateChart(period);
    });
  });

  // Кнопка «Синхронізувати»
  const syncBtn = document.getElementById('demoSyncBtn');
  const syncTimeEl = document.getElementById('demoSyncTime');
  const eventsList = document.getElementById('demoEventsList');
  let baseWeight = 64.28;
  let baseGain = 2.4;

  syncBtn?.addEventListener('click', () => {
    syncBtn.classList.add('is-syncing');
    setTimeout(() => {
      syncBtn.classList.remove('is-syncing');
      const delta = +(Math.random() * 0.14 + 0.02).toFixed(2);
      baseWeight = +(baseWeight + delta).toFixed(2);
      baseGain = +(baseGain + delta).toFixed(2);

      const wEl = document.getElementById('metricWeight');
      const dEl = document.getElementById('metricDaily');
      if (wEl) wEl.innerHTML = `${baseWeight.toFixed(2).replace('.', ',')} <small>кг</small>`;
      if (dEl) dEl.innerHTML = `+${baseGain.toFixed(2).replace('.', ',')} <small>кг</small>`;

      const now = new Date();
      const timeStr = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
      if (syncTimeEl) syncTimeEl.textContent = `Оновлено о ${timeStr}`;

      if (eventsList) {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.innerHTML = `
          <span class="event-badge ok">✓</span>
          <div class="event-body">
            <strong>Синхронізовано: вага ${baseWeight.toFixed(2).replace('.', ',')} кг (+${delta.toFixed(2).replace('.', ',')} кг)</strong>
            <span>Щойно (${timeStr})</span>
          </div>
        `;
        eventsList.prepend(li);
      }
    }, 550);
  });

  // Тумблеры настроек демо
  const intervalSelect = document.getElementById('demoIntervalSelect');
  const alertsToggle = document.getElementById('demoAlertsToggle');
  const reportToggle = document.getElementById('demoReportToggle');
  const statusEl = document.getElementById('demoSystemStatus');
  const dailyReportEvent = document.getElementById('dailyReportEvent');

  if (intervalSelect) {
    const savedInterval = localStorage.getItem('bh_demo_interval');
    if (savedInterval) intervalSelect.value = savedInterval;
    intervalSelect.addEventListener('change', () => {
      localStorage.setItem('bh_demo_interval', intervalSelect.value);
    });
  }

  if (alertsToggle && statusEl) {
    const savedAlerts = localStorage.getItem('bh_demo_alerts');
    if (savedAlerts !== null) alertsToggle.checked = savedAlerts === 'true';

    const applyAlerts = () => {
      localStorage.setItem('bh_demo_alerts', String(alertsToggle.checked));
      statusEl.classList.toggle('is-alert', !alertsToggle.checked);
      statusEl.innerHTML = alertsToggle.checked
      ? ' Усі системи в нормі'
      : ' Аварійні сповіщення вимкнено';
      };
      alertsToggle.addEventListener('change', applyAlerts);
      applyAlerts();
      }
      if (reportToggle && dailyReportEvent) {
      const savedReport = localStorage.getItem('bh_demo_report');
      if (savedReport !== null) reportToggle.checked = savedReport === 'true';
      const applyReport = () => {
      localStorage.setItem('bh_demo_report', String(reportToggle.checked));
      dailyReportEvent.classList.toggle('is-hidden', !reportToggle.checked);
      };
      reportToggle.addEventListener('change', applyReport);
      applyReport();
      }
      }
      // =====================================
      // ЕДИНАЯ ТОЧКА ЗАПУСКА
      // =====================================
      function initApp() {
      initPriceCalculator();
      initNavigationAndScroll();
      initDemoHiveCharts();
      }
      if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
      } else {
      initApp();
      }