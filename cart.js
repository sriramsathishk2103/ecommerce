const cartContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartContainer.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  }).join('');
}

document.getElementById("total").textContent = "Total: ₹" + total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
