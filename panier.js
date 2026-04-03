// panier.js
// Display cards added to the cart (panier)

// Retrieve cart items from localStorage
const panierCards = document.getElementById('panier-cards');
const emptyMessage = document.getElementById('empty-message');

let cart = JSON.parse(localStorage.getItem('panier')) || [];

function renderCart() {
  panierCards.innerHTML = '';
  if (cart.length === 0) {
    emptyMessage.classList.remove('hidden');
    return;
  }
  emptyMessage.classList.add('hidden');
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    panierCards.innerHTML += `
      <div class="bg-white p-4 rounded-xl shadow w-64">
        <img src="${item.image}" class="w-full h-40 object-cover rounded-lg mb-2">
        <h2 class="font-bold text-lg mb-2">${item.title}</h2>
        <p class="text-gray-500 mb-1">${item.category}</p>
        <p class="text-blue-600 font-semibold mb-2">${item.price}$</p>
      </div>
    `;
  }
}

renderCart();
