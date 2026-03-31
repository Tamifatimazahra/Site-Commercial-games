import {games} from './gamesDB.js';
const cards=document.getElementById("cards");
for (let i = 0; i < games.length; i++) {
  cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow w-64">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}</p>
    </div>
  `;
}