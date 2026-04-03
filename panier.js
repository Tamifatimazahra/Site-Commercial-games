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
      <div class="bg-white p-4 border-black rounded-xl shadow  flex  justify-between gap-4">
       <img src="${item.image}" class="w-[150px]  rounded-lg mb-2">
       <div>
        <h2 class="font-bold text-lg mb-2">${item.title}</h2>
        <p class="text-gray-500 mb-1">${item.category}</p>
        <p class="text-blue-600 font-semibold mb-2">${item.price}$</p>
        <p>Quantité</p>
        <div class="bg-stone-200 w-[65px]">
              <button id="plus" class="w-[20px] "> + </button>
              <span>${item.quantite || 1}</span>
              <button id="moins " class="w-[20px] "> - </button>
      </div>
        </div >
        <button class="mt-2  ">
                <img src="photos/poubelle-de-recyclage.png" class="w-6 h-6">
              </button>
              
            </div>

    `;
  }
}

renderCart();
