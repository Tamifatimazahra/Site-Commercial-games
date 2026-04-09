// panier.js
// Display cards added to the cart (panier)

// Retrieve cart items from localStorage
const panierCards = document.getElementById('panier-cards');
const emptyMessage = document.getElementById('empty-message');
// ------------------1  Récupération des éléments du panier depuis localStorage-------------------------------

let cart = JSON.parse(localStorage.getItem('panier')) || [];
// ------------------------2 Fonction principale pour afficher le contenu du panier--------------------------------------
function renderCart() {
  
  panierCards.innerHTML = '';



  if (cart.length === 0) {
    emptyMessage.classList.remove('hidden');
    return;
  }
  emptyMessage.classList.add('hidden');
  //  ---------------------3 afficher chaque jeu dans le panier--------------------

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    panierCards.innerHTML += `
      <div class=" divdelete bg-white p-4 border-black rounded-xl shadow flex justify-between gap-4">
        <img src="${item.image}" class="w-[150px] rounded-lg mb-2">
        <div>
          <h2 class="font-bold text-lg mb-2">${item.title}</h2>
          <p class="text-blue-600 font-semibold mb-2">${item.price}$</p>
          <p>Quantité</p>
          <div class="bg-stone-200 w-[65px] ">
            <button class="plus-btn w-[20px]" data-index="${i}"> + </button>
            <span>${item.quantite || 1}</span>
            <button class="moins-btn w-[20px]" data-index="${i}"> - </button>
          </div>
        </div>
        <button class="delete-btn mt-2" data-index="${i}">
          <img src="photos/poubelle-de-recyclage.png" class="deleteimg w-6 h-6">
        </button>
      </div>
    `;
  }

// -----------------------------4 Gestion des boutons pour augmenter la quantité ---------------------------
  const plusBtns = document.querySelectorAll('.plus-btn');
  const moinsBtns = document.querySelectorAll('.moins-btn');
  for (let j = 0; j < plusBtns.length; j++) {
    plusBtns[j].addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'));
      cart[idx].quantite = (cart[idx].quantite || 1) + 1;
      localStorage.setItem('panier', JSON.stringify(cart));
      renderCart();
    });
  }
  for (let j = 0; j < moinsBtns.length; j++) {
    moinsBtns[j].addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'));
      if ((cart[idx].quantite || 1) > 1) {
        cart[idx].quantite -= 1;
        localStorage.setItem('panier', JSON.stringify(cart));
        renderCart();
      }
    });
  }
}

renderCart();

// -----------------------------5 Gestion du bouton supprimer (delete) ---------------------------
panierCards.onclick = function(e) {

  if (e.target.closest('.delete-btn')) {

    const btn = e.target.closest('.delete-btn');
    const idx = parseInt(btn.getAttribute('data-index'));

    cart.splice(idx, 1);

    localStorage.setItem('panier', JSON.stringify(cart));

    renderCart();
  }
};
