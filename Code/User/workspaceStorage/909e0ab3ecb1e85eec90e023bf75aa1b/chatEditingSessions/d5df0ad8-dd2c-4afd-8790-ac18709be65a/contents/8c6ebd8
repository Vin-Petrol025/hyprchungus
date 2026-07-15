const CART_STORAGE_KEY = "m-stitch-cart-items";
const DELIVERY_CHARGE = 250;

function getCartItems() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveCartItems(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

function getProductById(productId) {
  const catalog = window.products || [];
  return catalog.find((product) => Number(product.id) === Number(productId));
}

function numericPrice(value) {
  return parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function formatPrice(value) {
  return `PKR ${new Intl.NumberFormat("en-PK").format(value)}`;
}

function getCartSubtotal(items) {
  return items.reduce((total, item) => total + numericPrice(item.price) * (item.quantity || 1), 0);
}

function getCartDelivery(items) {
  return items.length > 0 ? DELIVERY_CHARGE : 0;
}

function getCartTotal(items) {
  return getCartSubtotal(items) + getCartDelivery(items);
}

function renderCartUI() {
  const items = getCartItems();
  const cartCountElements = document.querySelectorAll(".cart-count");
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  cartCountElements.forEach((element) => {
    element.textContent = totalItems;
  });

  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;

  if (items.length === 0) {
    drawer.innerHTML = `
      <div class="cart-drawer-header">
        <h3>Your cart</h3>
        <button type="button" class="cart-close-btn" data-action="close-cart">×</button>
      </div>
      <div class="cart-empty">Your cart is empty.</div>
    `;
    drawer.setAttribute("aria-hidden", "true");
    return;
  }

  drawer.innerHTML = `
    <div class="cart-drawer-header">
      <h3>Your cart</h3>
      <button type="button" class="cart-close-btn" data-action="close-cart">×</button>
    </div>
    <div class="cart-items-list">
      ${items
        .map(
          (item) => `
            <div class="cart-item">
              <div class="cart-item-main">
                <strong>${item.name}</strong>
                <span>${item.price}</span>
              </div>
              <div class="cart-item-actions">
                <button type="button" class="qty-btn" data-action="decrease" data-product-id="${item.id}">−</button>
                <span class="qty-value">${item.quantity || 1}</span>
                <button type="button" class="qty-btn" data-action="increase" data-product-id="${item.id}">+</button>
                <button type="button" class="remove-cart-item" data-action="remove" data-product-id="${item.id}">Remove</button>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(getCartSubtotal(items))}</span></div>
      <div class="cart-summary-row"><span>Delivery</span><span>${formatPrice(getCartDelivery(items))}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>${formatPrice(getCartTotal(items))}</span></div>
    </div>
    <a href="buy.html?cart=1" class="checkout-link">Proceed to checkout</a>
  `;
  drawer.setAttribute("aria-hidden", "false");

  drawer.querySelectorAll("[data-action='close-cart']").forEach((button) => {
    button.addEventListener("click", () => {
      closeCartDrawer();
    });
  });

  drawer.querySelectorAll("[data-action='remove']").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.getAttribute("data-product-id")));
    });
  });

  drawer.querySelectorAll("[data-action='increase']").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQuantity(Number(button.getAttribute("data-product-id")), 1);
    });
  });

  drawer.querySelectorAll("[data-action='decrease']").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQuantity(Number(button.getAttribute("data-product-id")), -1);
    });
  });
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product || product.inStock === 0) return false;

  const cart = getCartItems();
  const existing = cart.find((item) => Number(item.id) === Number(productId));

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCartItems(cart);
  renderCartUI();
  showCartStatus(`${product.name} added to cart.`);
  return true;
}

function removeFromCart(productId) {
  const updated = getCartItems().filter((item) => Number(item.id) !== Number(productId));
  saveCartItems(updated);
  renderCartUI();
}

function updateCartQuantity(productId, delta) {
  const cart = getCartItems();
  const target = cart.find((item) => Number(item.id) === Number(productId));

  if (!target) return;

  target.quantity = Math.max(1, (target.quantity || 1) + delta);
  saveCartItems(cart);
  renderCartUI();
}

function clearCart() {
  saveCartItems([]);
  renderCartUI();
}

function showCartStatus(message) {
  let status = document.getElementById("cart-status-message");
  if (!status) {
    status = document.createElement("div");
    status.id = "cart-status-message";
    status.className = "cart-status-message";
    document.body.appendChild(status);
  }

  status.textContent = message;
  status.classList.add("visible");
  window.clearTimeout(showCartStatus.timeoutId);
  showCartStatus.timeoutId = window.setTimeout(() => {
    status.classList.remove("visible");
  }, 1800);
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;
  drawer.classList.add("open");
  overlay.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function initializeCartUI() {
  renderCartUI();

  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const productId = Number(button.getAttribute("data-product-id"));
      addToCart(productId);
    });
  });

  document.querySelectorAll(".cart-toggle-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openCartDrawer();
    });
  });

  const overlay = document.getElementById("cart-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeCartDrawer);
  }
}

document.addEventListener("DOMContentLoaded", initializeCartUI);

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.getCartItems = getCartItems;
window.getCartSubtotal = getCartSubtotal;
window.getCartDelivery = getCartDelivery;
window.getCartTotal = getCartTotal;
window.formatPrice = formatPrice;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
