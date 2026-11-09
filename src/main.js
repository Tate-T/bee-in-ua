
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const menuWrapper = document.querySelector('.header-menu-wrapper');
    const langBtns = document.querySelectorAll('.lang-btn');

    if (burgerBtn && menuWrapper) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            const isOpen = burgerBtn.classList.toggle('open');
            menuWrapper.classList.toggle('open');

            burgerBtn.setAttribute('aria-expanded', isOpen);
        });

        menuWrapper.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('open');
                menuWrapper.classList.remove('open');
                burgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (
                !e.target.closest('.main-header') &&
                menuWrapper.classList.contains('open')
            ) {
                burgerBtn.classList.remove('open');
                menuWrapper.classList.remove('open');
                burgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});


// =====================================
// ИЗОБРАЖЕНИЯ ТОВАРОВ
// =====================================

import bh01Img from './img/fon/gsm-vesy-dlia-paseki-BH-01.jpg';
import bh04Img from './img/fon/vagy-pasichni-golovniy-pristriy-BH-04.jpg';
import bhSth1Img from './img/fon/datchik-temperatury-vlazhnosti-dlia-paseki.jpg';
import bhSt1Img from './img/fon/datchik-temperatury-dlia-paseki-BH-01.jpg';
import bhSm1Img from './img/fon/pasechnie_vesy_01.jpg';
import bhSm3Img from './img/fon/tenzo_sensor_BH-SM3.jpg';
import ax10pImg from './img/fon/solar_panel_12V_polycrystal.jpg';


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
        img: bh01Img
    },
    {
        id: 2,
        model: 'BH-04',
        title: 'Монітор медозбору на 4 вулики',
        desc: 'Комплект: прилад, зарядний пристрій, антена, SIM-карта. Можна підключити 1 внутрішній, 1 зовнішній датчик та 4 датчика ваги.',
        price: 7250,
        img: bh04Img
    },
    {
        id: 3,
        model: 'BH-STH1',
        title: 'Датчик температури та вологості всередині вулика',
        desc: 'Довжина кабелю 1,5м.',
        price: 350,
        img: bhSth1Img
    },
    {
        id: 4,
        model: 'BH-ST1',
        title: 'Датчик температури ззовні',
        desc: 'Довжина кабелю 1м.',
        price: 220,
        img: bhSt1Img
    },
    {
        id: 5,
        model: 'BH-SM1',
        title: 'Вагова платформа з тензодатчиком 200кг',
        desc: 'Габаритні розміри 440х500х125мм. Довжина кабелю 1,5м.',
        price: 4750,
        img: bhSm1Img
    },
    {
        id: 6,
        model: 'BH-SM3',
        title: 'Тензодатчик 200кг з кріпежем та регульованими ніжками',
        desc: 'Довжина кабелю 1,5м.',
        price: 2750,
        img: bhSm3Img
    },
    {
        id: 8,
        model: 'AX-10P',
        title: 'Сонячна батарея 4,2Вт 120х200мм',
        desc: 'Автономне живлення для монітора медозбору.',
        price: 600,
        img: ax10pImg
    }
];


// =====================================
// ГОТОВЫЕ КОМПЛЕКТЫ
// =====================================

const presetSets = {

    // BH-01 + платформа
    'bh01-platform': {
        title: 'Купити пасічні ваги BH-01 + платформа',
        quantities: {
            1: 1,
            3: 1,
            4: 1,
            5: 1,
            8: 1
        }
    },

    // BH-04 + 4 платформи
    'bh04-platforms': {
        title: 'Купити пасічні ваги BH-04 + платформи',
        quantities: {
            2: 1,
            3: 1,
            4: 1,
            5: 4,
            8: 1
        }
    },

    // BH-01 + датчик
    'bh01-sensor': {
        title: 'Купити пасічні ваги BH-01 + датчик',
        quantities: {
            1: 1,
            3: 1,
            4: 1,
            6: 1,
            8: 1
        }
    },

    // BH-04 + 4 датчики
    'bh04-sensors': {
        title: 'Купити пасічні ваги BH-04 + датчики',
        quantities: {
            2: 1,
            3: 1,
            4: 1,
            6: 4,
            8: 1
        }
    }
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

    products.forEach(p => {
        cart[p.id] = 0;
    });


    // =====================================
    // ЧИТАЕМ ВЫБРАННЫЙ КОМПЛЕКТ ИЗ URL
    // =====================================

    const urlParams = new URLSearchParams(window.location.search);
    const selectedSet = urlParams.get('set');

    const preset = presetSets[selectedSet];


    // =====================================
    // ФОРМИРУЕМ СПИСОК ТОВАРОВ
    // =====================================

    productListEl.innerHTML = products.map(p => `
        <div class="price-product-card" data-id="${p.id}">

            <div class="price-img-wrap">
                <img
                    src="${p.img}"
                    alt="${p.title}"
                    loading="lazy"
                >
            </div>

            <div class="price-product-info">

                <div class="price-product-text-col">
                    <div class="price-product-title">
                        ${p.title}
                    </div>

                    <div class="price-product-desc">
                        ${p.desc}
                    </div>
                </div>

                <span class="price-product-model">
                    ${p.model}
                </span>

            </div>

            <div class="price-product-controls">

                <div class="price-unit">
                    <span>Ціна: </span>
                    <strong>${p.price.toLocaleString('uk-UA')} грн.</strong>
                </div>

                <div class="price-qty-control">

                    <button
                        type="button"
                        class="price-qty-btn"
                        data-action="dec"
                        data-id="${p.id}"
                    >−</button>

                    <input
                        type="number"
                        class="price-qty-input"
                        id="qty-${p.id}"
                        data-id="${p.id}"
                        value="0"
                        min="0"
                        max="999"
                    >

                    <button
                        type="button"
                        class="price-qty-btn"
                        data-action="inc"
                        data-id="${p.id}"
                    >+</button>

                </div>

                <div class="price-row-subtotal">
                    <span>Разом:</span>
                    <span id="sub-${p.id}">0 грн.</span>
                </div>

            </div>

        </div>
    `).join('');


    // =====================================
    // ПОДСТАВЛЯЕМ КОМПЛЕКТУЮЩИЕ
    // =====================================

    if (preset) {

        // Меняем заголовок страницы
        if (priceTitle) {
            priceTitle.textContent = preset.title;
        }

        // Устанавливаем количество товаров
        Object.entries(preset.quantities).forEach(([id, qty]) => {
            cart[Number(id)] = qty;

            const input = document.getElementById(`qty-${id}`);

            if (input) {
                input.value = qty;
            }
        });

    }


    // =====================================
    // ИЗМЕНЕНИЕ КОЛИЧЕСТВА
    // =====================================

    function setQty(id, value) {

        let qty = parseInt(value, 10);

        if (isNaN(qty) || qty < 0) {
            qty = 0;
        }

        if (qty > 999) {
            qty = 999;
        }

        cart[id] = qty;

        const inputEl = document.getElementById(`qty-${id}`);

        if (inputEl) {
            inputEl.value = qty;
        }

        calculateTotal();
    }


    // =====================================
    // ПЕРЕСЧЕТ СТОИМОСТИ
    // =====================================

    function calculateTotal() {

        let totalSum = 0;
        let totalCount = 0;

        products.forEach(p => {

            const qty = cart[p.id] || 0;
            const subtotal = qty * p.price;

            totalSum += subtotal;
            totalCount += qty;

            const subEl = document.getElementById(`sub-${p.id}`);

            if (subEl) {
                subEl.textContent =
                    `${subtotal.toLocaleString('uk-UA')} грн.`;
            }

        });

        grandTotalEl.textContent =
            totalSum.toLocaleString('uk-UA');

        totalItemsEl.textContent = totalCount;

        checkoutBtn.disabled = totalCount === 0;
    }


    // Первый расчёт после загрузки комплекта
    calculateTotal();


    // =====================================
    // КНОПКИ + И -
    // =====================================

    productListEl.addEventListener('click', (e) => {

        const btn = e.target.closest('.price-qty-btn');

        if (!btn) return;

        const id = Number(btn.dataset.id);

        const delta =
            btn.dataset.action === 'inc' ? 1 : -1;

        setQty(
            id,
            Math.max(0, (cart[id] || 0) + delta)
        );

    });


    // =====================================
    // РУЧНОЙ ВВОД КОЛИЧЕСТВА
    // =====================================

    productListEl.addEventListener('input', (e) => {

        if (!e.target.classList.contains('price-qty-input')) {
            return;
        }

        const id = Number(e.target.dataset.id);

        setQty(id, e.target.value);

    });


    // =====================================
    // ОФОРМЛЕНИЕ ЗАКАЗА
    // =====================================

    checkoutBtn?.addEventListener('click', () => {

        const selected = products
            .filter(p => cart[p.id] > 0)
            .map(p =>
                `${p.model} — ${cart[p.id]} шт. = ${
                    (cart[p.id] * p.price).toLocaleString('uk-UA')
                } грн.`
            );

        alert(
            `Ваше замовлення:\n\n${selected.join('\n')}\n\nРазом: ${grandTotalEl.textContent} грн.`
        );

    });


    // =====================================
    // МОДАЛЬНОЕ ОКНО
    // =====================================

    const modal = document.getElementById('quickOrderModal');

    const openModalBtn =
        document.getElementById('openQuickOrderBtn');

    const closeModalBtn =
        document.getElementById('closeQuickOrderBtn');

    const quickOrderForm =
        document.getElementById('quickOrderForm');


    openModalBtn?.addEventListener('click', () => {
        modal?.classList.add('is-open');
    });


    closeModalBtn?.addEventListener('click', () => {
        modal?.classList.remove('is-open');
    });


    modal?.addEventListener('click', (e) => {

        if (e.target === modal) {
            modal.classList.remove('is-open');
        }

    });


    // =====================================
    // ОТПРАВКА БЫСТРОГО ЗАКАЗА
    // =====================================

    quickOrderForm?.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(quickOrderForm);

        const selected = products
            .filter(p => cart[p.id] > 0)
            .map(p =>
                `${p.model} — ${cart[p.id]} шт.`
            );

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

initPriceCalculator();
