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

document.addEventListener('DOMContentLoaded', () => {
  initPriceCalculator();

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

  // 3. Жёлтая полоска прогресса в самом верху экрана (как на главной)
  let progressBar = document.querySelector('.progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
  }

  // Кнопка возврата наверх (.back-top) для Прайса, SMS, Статей и внутренних статей
  let backTopBtn = document.querySelector('.back-top');
  const needsBackTop = document.querySelector(
    '.price-page, .sms-page, .bh-sms-wrapper, .stats-list, .articles-list, .article-page'
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
});
