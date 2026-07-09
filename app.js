const products = [
  { id: 1, name: 'Quesadilla (paquete x10) — detal $3.5, mayor 4pqt x $10', cat: 'factura', icon: 'fa-cookie-bite', price: 3.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 2, name: 'Torta de Piña completa (½ kg)', cat: 'pastel', icon: 'fa-cake', price: 20.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 3, name: 'Torta de Piña — porción (½ kg) $2 BCV', cat: 'pastel', icon: 'fa-cake', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 4, name: 'Galletas (paquete) — detal $1.8, mayor 8pq x 8und x $10/$13 BCV', cat: 'galleta', icon: 'fa-cookie', price: 1.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 5, name: 'Quesillo completo', cat: 'postre', icon: 'fa-ice-cream', price: 20.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 6, name: 'Torta Fría Cuadrada — $3 BCV detal', cat: 'pastel', icon: 'fa-cake', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 7, name: 'Yoyito (paquete x6)', cat: 'galleta', icon: 'fa-cookie', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 8, name: 'Mini Bomba (unidad) — $0.75, bandeja x15 $5/$6 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 0.75, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 9, name: 'Mini Bomba de Crema (unidad) — $0.75, bandeja x15 $5/$6 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 0.75, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 10, name: 'Mini Bomba de Nutella (unidad) — $0.75, mayor 10x$5 / 10x$6 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 0.75, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 12, name: 'Pan de Leche (60cm) — detal $2.5, mayor 4x$10/4x$13 BCV, 5x$10/5x$13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 13, name: 'Pan Francés (bolsa x20 und) — detal $1.8, mayor $1.6 la bolsa', cat: 'pan', icon: 'fa-bread-slice', price: 1.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 14, name: 'Mega Cachito — $2.20 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 2.20, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 15, name: 'Cachito (unidad) — $1.2 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 1.20, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 16, name: 'Pan de Hamburguesa Junior (paquete x10)', cat: 'pan', icon: 'fa-bread-slice', price: 2.60, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 17, name: 'Tortica de Vainilla — detal $1.8, mayor 8x$10 divisa / 8x$13 BCV', cat: 'pastel', icon: 'fa-cake', price: 1.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 18, name: 'Enrollados (bandeja x4 und) — $3 BCV, mayor 4 bandejas 4x$10 / 4x$13 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 19, name: 'Pan Campesino / Pan Andino (unidad) — $0.85 detal, mayor 16x$10 / $13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 0.85, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 20, name: 'Pingüino (bandeja x3 und) — $3 detal, mayor 4 bandejas x $10 / $13 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 21, name: 'Suspiros (bandeja x6 und) — $0.80 detal, mayor 10 bandejas x $7 / $8 BCV', cat: 'postre', icon: 'fa-ice-cream', price: 0.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 22, name: 'Quesillo (porción) — $2 detal, mayor $1.8 BCV / $1.5 divisa', cat: 'postre', icon: 'fa-ice-cream', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 23, name: 'Brazo Gitano — $3.5 BCV detal, mayor 5x$10 / 5x$13 bs', cat: 'pastel', icon: 'fa-cake', price: 3.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 25, name: 'Pie de Limón (porción) — $2.5 detal y al mayor', cat: 'pastel', icon: 'fa-cake', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 26, name: 'Mini Torta Vainilla (rellena y cubierta de Arequipe) — $5 divisa / $6 BCV', cat: 'pastel', icon: 'fa-cake', price: 5.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 27, name: 'Torta Vainilla cubierta de Arequipe (½ kg) — $12 divisa / $13 bs', cat: 'pastel', icon: 'fa-cake', price: 12.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 28, name: 'Bombas Nutella — $2', cat: 'factura', icon: 'fa-cookie-bite', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 29, name: 'Torta de Vainilla (¼ kg) — $8 / $9 BCV', cat: 'pastel', icon: 'fa-cake', price: 8.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 30, name: 'Galleta de huevo rellena (paquete x6) — $1.5', cat: 'galleta', icon: 'fa-cookie', price: 1.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 31, name: 'Galleta de huevo (paquete x10) — $2 detal, mayor $1.5 divisa / $1.8 BCV', cat: 'galleta', icon: 'fa-cookie', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 32, name: 'Porquecito (6 und) — $1.8, mayor 8 bandejas x $10 / $13 BCV', cat: 'factura', icon: 'fa-cookie-bite', price: 1.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 33, name: 'Torta pingüino 3$ detal Mayor 2.6$ bcv 2$ divisa', cat: 'pastel', icon: 'fa-cake', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 34, name: 'Torta samba 3$ divisa mayor 2,6$ bcv detal 3$', cat: 'pastel', icon: 'fa-cake', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 35, name: 'Pan Sándwich — $2.5 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 36, name: 'Pan Sándwich Integral Pequeño — $1.95', cat: 'pan', icon: 'fa-bread-slice', price: 1.95, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 37, name: 'Pan Sándwich Integral — $3.25', cat: 'pan', icon: 'fa-bread-slice', price: 3.25, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 38, name: 'Pan Andino — $0.85', cat: 'pan', icon: 'fa-bread-slice', price: 0.85, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 39, name: 'Pan Campesino — $0.85', cat: 'pan', icon: 'fa-bread-slice', price: 0.85, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 40, name: 'Pan de Perro Caliente — $2.5', cat: 'pan', icon: 'fa-bread-slice', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 41, name: 'Guayabita (paquete x10) — $3', cat: 'pan', icon: 'fa-bread-slice', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 42, name: 'Pan de Guayaba (unidad) — $2.5', cat: 'pan', icon: 'fa-bread-slice', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 43, name: 'Pan de Arequipe (unidad) — $2.5', cat: 'pan', icon: 'fa-bread-slice', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 44, name: 'Pan Manito de Arequipe y Guayaba (unidad) — $0.25', cat: 'pan', icon: 'fa-bread-slice', price: 0.25, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 45, name: 'Galletón de Nutella, Galak o Samba — $1', cat: 'galleta', icon: 'fa-cookie', price: 1.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 46, name: 'Pan Dulce Piñita — $0.50', cat: 'pan', icon: 'fa-bread-slice', price: 0.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 47, name: 'Pan Dulce Reinita — $1', cat: 'pan', icon: 'fa-bread-slice', price: 1.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 48, name: 'Pan Dulce Lambada — $2', cat: 'pan', icon: 'fa-bread-slice', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 49, name: 'Combo Lambadas (8 und) — $10 / $13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 10.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 50, name: 'Pan de Queso — $3', cat: 'pan', icon: 'fa-bread-slice', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 51, name: 'Combo Pan de Queso (4 und) — $10 / $13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 10.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 52, name: 'Bizcocho Dulce de Pan (unidad) — $0.78', cat: 'pan', icon: 'fa-bread-slice', price: 0.78, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 53, name: 'Bizcocho de Pan Salado (unidad) — $1.8', cat: 'pan', icon: 'fa-bread-slice', price: 1.80, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 54, name: 'Bolsa de Pan Bolita Dulce — $2.1, mayor $1.80', cat: 'pan', icon: 'fa-bread-slice', price: 2.10, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 55, name: 'Orejones (paquete grande) — $3', cat: 'galleta', icon: 'fa-cookie', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 56, name: 'Orejones (paquete pequeño) — $1.5', cat: 'galleta', icon: 'fa-cookie', price: 1.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 57, name: 'Pan de Pizza (unidad) — $0.90', cat: 'pan', icon: 'fa-bread-slice', price: 0.90, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 58, name: 'Pan Campesino (bolsa x3 und) — $2', cat: 'pan', icon: 'fa-bread-slice', price: 2.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 59, name: 'Combo Pan Campesino (8 paquetes x3 und) — $10 / $13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 10.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 60, name: 'Combo Pan Campesino y Andino (16 panes) — $10 / $13 BCV', cat: 'pan', icon: 'fa-bread-slice', price: 10.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 61, name: 'Torta Choco-Cookies (unidad) — $3', cat: 'pastel', icon: 'fa-cake', price: 3.00, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 62, name: 'Trufa Pequeña (9 und) — $1.5', cat: 'postre', icon: 'fa-ice-cream', price: 1.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 63, name: 'Trufa Grande (15 und) — $2.5', cat: 'postre', icon: 'fa-ice-cream', price: 2.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
  { id: 64, name: 'Porción Torta Matilda — $3.5', cat: 'pastel', icon: 'fa-cake', price: 3.50, oldPrice: null, rating: 4.5, reviews: 0, badge: '' },
];

let cart = [];
let currentCategory = 'todas';
let currentSort = 'relevancia';

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const productCount = document.getElementById('productCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartFloatBtn = document.getElementById('cartFloatBtn');
const cartFloatBadge = document.getElementById('cartFloatBadge');

const cartForm = document.getElementById('cartForm');
const formName = document.getElementById('formName');
const formPhone = document.getElementById('formPhone');
const formType = document.getElementById('formType');
const formPayment = document.getElementById('formPayment');
const formAddress = document.getElementById('formAddress');
const formAddressGroup = document.getElementById('formAddressGroup');
const pagoMovilInfo = document.getElementById('pagoMovilInfo');
const zelleInfo = document.getElementById('zelleInfo');
const locationBtn = document.getElementById('locationBtn');
const formNote = document.getElementById('formNote');

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
    '<i class="far fa-star"></i>'.repeat(empty);
}

function getProductImage(product) {
  const map = {
    1: 'Quesadilla trae 10 el paquete.png',
    2: 'Torta de piña 20$ completa.png',
    4: 'Galletas 1,8$ detal mayor.png',
    5: 'Quesillo completo 20$.png',
    6: 'Torta fría cuadrada 3$ bcv detal.png',
    7: 'Yoyito paquete 2$ trae 6 unidades.png',
    8: 'Mini bomba la unidad 0,75$ la bandeja trae 15.png',
    9: 'Mini bomba de crema 0,75 de.png',
    10: 'Mini bomba de nutella.png',
    12: 'Pan de leche detal 2,5$.png',
    13: 'Pan francés 1,8$.png',
    3: 'Torta de Piña porción.png',
    14: 'Mega Cachito 2.20$ bcv.png',
    15: 'Cachito.png',
    16: 'Pan de hamburguesa junior.png',
    17: 'Tortica de vainilla.png',
    18: 'Enrollados bandeja trae 4 unidades.png',
    19: 'Pan Campesino Andino.png',
    20: 'Pingüino.png',
    21: 'Suspiro 0.80$ detal trae 6 unidades, mayor 1.png',
    22: 'Detal porción 2$ Mayor de quesillo.png',
    23: 'Brazo gitano detal 3,5$.png',
    25: 'Pie de limón porción 2,5$.png',
    26: 'Mini torta de vainilla cubierta y rellena de arequipe  5$ divisa.png',
    27: 'Torta de vainilla cubierta de arequipe de medio kg.png',
    28: 'bomba de nutella.png',
     29: 'Torta de vainilla de un cuarto de kg.png',
     30: 'Galleta de huevo rellena paquete x6 $1.5.jpg',
     31: 'Galleta de huevo paquete x10 $2 detal mayor $1.5 divisa  $1.8 BCV.jpg',
      32: 'Porquecito 6 und.jpg',
      33: 'torta pinguiino.jpg',
      34: 'torta de samba y chocolate.jpg',
     35: 'Pan Sándwich.png',
     36: 'Pan Sándwich Integral Pequeño.png',
     37: 'Pan Sándwich Integral.png',
     39: 'Pan Campesino.png',
     40: 'Pan de Perro Caliente.png',
     41: 'Guayabita de 10 unidades.png',
     42: 'Pan de Guayaba.png',
     43: 'Pan de Arequipe.png',
     44: 'Pan Manito de Arequipe y Guayaba.png',
       38: 'pan andino.png',
      45: 'Galletón de Nutella, Galak o Samba.png',
       46: 'Pan Dulce Piñita.png',
      47: 'Pan Dulce Reinita.png',
      48: 'Pan Dulce Lambada.png',
      49: 'Combo Lambadas.png',
      50: 'Pan de Queso.png',
      51: 'Combo Pan de Queso.png',
      54: 'Bolsa de Pan Bolita Dulce.png',
      57: 'Pan de Pizza.png',
      58: 'Pan Campesino bolsa x3 und.png',
      59: 'Combo Pan Campesino.png',
      60: 'Combo Pan Campesino y Andino (.png',
     52: 'Bizcocho dulce.png',
     53: 'Bolsa de Bizcocho salado.png',
     55: 'orejón de 3$.png',
     56: 'Orejón de 1.5.png',
     61: 'Torta choco-cookies 3$ unidad.png',
     62: 'Trufa pequeña 9unidsdes 1.5$.png',
     63: 'Trufa grande 15 unidades 2,5$.png',
     64: 'Porción torta Matilda 3,5$.png',
  };
  const file = map[product.id];
  return file ? `imagenes/${file}` : '';
}

function getBadgeClass(badge) {
  if (!badge) return '';
  const lower = badge.toLowerCase();
  if (lower === 'oferta') return 'offer';
  if (lower === 'new') return 'new';
  if (lower === 'más vendido') return 'offer';
  return '';
}

function getFilteredProducts() {
  let filtered = [...products];

  if (currentCategory !== 'todas') {
    filtered = filtered.filter(p => p.cat === currentCategory);
  }

  const query = searchInput.value.toLowerCase().trim();
  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.cat.toLowerCase().includes(query)
    );
  }

  switch (currentSort) {
    case 'menor': filtered.sort((a, b) => a.price - b.price); break;
    case 'mayor': filtered.sort((a, b) => b.price - a.price); break;
    case 'nombre': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: filtered.sort((a, b) => b.rating - a.rating); break;
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productCount.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-lighter);">
        <i class="fas fa-search" style="font-size:48px;margin-bottom:16px;color:var(--border);"></i>
        <p style="font-size:18px;font-weight:500;margin-bottom:6px;color:var(--text-light);">No encontramos productos</p>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const badgeClass = getBadgeClass(p.badge);
    const badgeHtml = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : '';
    const oldPriceHtml = p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : '';

    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image">
          <img src="${getProductImage(p)}" alt="${p.name}" class="product-img">
          ${badgeHtml}
        </div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>

          <div class="product-footer">
            <div class="product-price">
              <span class="price-current">$${p.price.toFixed(2)}</span>
              ${oldPriceHtml}
            </div>
            <button class="add-to-cart" data-id="${p.id}" title="Agregar al carrito">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showAddedFeedback(productId);
}

function showAddedFeedback(id) {
  const btn = document.querySelector(`.add-to-cart[data-id="${id}"]`);
  if (btn) {
    const icon = btn.querySelector('i');
    icon.className = 'fas fa-check';
    btn.style.background = 'var(--amarillo-dark)';
    btn.style.color = '#fff';
    setTimeout(() => {
      icon.className = 'fas fa-plus';
      btn.style.background = '';
      btn.style.color = '';
    }, 800);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
  cartFloatBadge.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Tu carrito está vacío</p>
        <span>Agrega productos para empezar a comprar</span>
      </div>
    `;
    cartTotal.textContent = '$0.00';
    cartForm.classList.remove('active');
    return;
  }

  cartForm.classList.add('active');

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div class="cart-item-icon"><i class="fas ${item.icon}"></i></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

/* EVENTS */
searchInput.addEventListener('input', renderProducts);

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderProducts();
});

document.querySelectorAll('.cat-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
    item.classList.add('active');
    currentCategory = item.dataset.cat;
    renderProducts();
  });
});

cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

cartFloatBtn.addEventListener('click', () => {
  cartModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
  cartModal.classList.remove('active');
  document.body.style.overflow = '';
});

cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.querySelectorAll('#formPayment input').forEach(rb => {
  rb.addEventListener('change', () => {
    const val = document.querySelector('#formPayment input:checked').value;
    pagoMovilInfo.style.display = val === 'pago-movil' ? 'block' : 'none';
    zelleInfo.style.display = val === 'zelle' ? 'block' : 'none';
  });
});

document.querySelectorAll('#formType input').forEach(rb => {
  rb.addEventListener('change', () => {
    const val = document.querySelector('#formType input:checked').value;
    formAddressGroup.style.display = val === 'domicilio' ? 'block' : 'none';
  });
});

locationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Tu navegador no soporta geolocalización');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      formAddress.value = `https://www.google.com/maps?q=${latitude},${longitude}`;
    },
    () => alert('No se pudo obtener tu ubicación. Actívala en tu dispositivo.')
  );
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  const name = formName.value.trim();
  const phone = formPhone.value.trim();
  const type = document.querySelector('#formType input:checked').value;
  const payment = document.querySelector('#formPayment input:checked').value;

  if (!name || !phone) {
    alert('Por favor completa tu nombre y teléfono');
    return;
  }

  const paymentLabels = { efectivo: 'Efectivo', 'pago-movil': 'Pago móvil', zelle: 'ZELLE' };
  const typeLabel = type === 'domicilio' ? 'Entrega a domicilio' : 'Retiro en local';
  const paymentLabel = paymentLabels[payment] || 'Efectivo';

  let msg = `*🛒 Pedido Trigo Dulzón*%0A`;
  msg += `*Nombre:* ${name}%0A`;
  msg += `*Teléfono:* ${phone}%0A`;
  msg += `*Tipo:* ${typeLabel}%0A`;
  msg += `*Pago:* ${paymentLabel}%0A`;
  if (type === 'domicilio') {
    const addr = formAddress.value.trim();
    msg += `*Dirección:* ${addr || 'No especificada'}%0A`;
    msg += `_Pregunta: Para entregar a mi domicilio, ¿Cuánto sería el monto adicional del delivery?_%0A`;
  }
  const note = formNote.value.trim();
  if (note) msg += `*Nota:* ${note}%0A`;
  msg += `*Productos:*%0A`;

  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    msg += `• ${item.name} x${item.qty} = $${subtotal.toFixed(2)}%0A`;
  });
  msg += `*Total: $${total.toFixed(2)}*`;

  const url = `https://wa.me/584246472515?text=${msg}`;
  window.open(url, '_blank');
  cart = [];
  updateCartUI();
  cartModal.classList.remove('active');
  document.body.style.overflow = '';
  formName.value = '';
  formPhone.value = '';
  formAddress.value = '';
  formNote.value = '';
  document.querySelector('#formType input[value="retiro"]').checked = true;
  document.querySelector('#formPayment input[value="efectivo"]').checked = true;
  pagoMovilInfo.style.display = 'none';
  zelleInfo.style.display = 'none';
  formAddressGroup.style.display = 'none';
});

/* SCROLL - floating image */
const floatingImg = document.querySelector('.floating-img');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    floatingImg.classList.add('visible');
  } else {
    floatingImg.classList.remove('visible');
  }
});

/* INIT */
renderProducts();
