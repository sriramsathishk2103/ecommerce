const form = document.getElementById("checkout-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Order placed successfully! Thank you for shopping with ShopEase.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
