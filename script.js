import {games} from './gamesDB.js';
const cards=document.getElementById("cards");
for (let i = 0; i < games.length; i++) {
  cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  
  const cardsDivs = document.querySelectorAll("#cards > div"); // kol card li tgenerate

  for (let i = 0; i < cardsDivs.length; i++) {
    const title = cardsDivs[i].querySelector("h2").textContent.toLowerCase();
    
    if (title.includes(term)) {
      cardsDivs[i].style.display = "block"; // ila kan , ban
    } else {
      cardsDivs[i].style.display = "none"; // ila makaynch, matbanch
    }
  }
});




let RPG=document.getElementById("RPG");
RPG.onclick=function(){
  RPGcategory();
}
function RPGcategory(){
  cards.innerHTML="";
  let found=false;
  for(let i=0 ; i<games.length;i++){
    if("RPG"==games[i].category){
      found=true;
      cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;
    }
  }
}

let Action=document.getElementById('Action');
Action.onclick=function(){
  Actioncategory();
}
function Actioncategory(){
  cards.innerHTML="";
  let found=false;
  for(let i=0;i<games.length;i++){
    if("Action"==games[i].category){
      found=true;
       cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;

    }
  }
}

FPS.onclick=function(){
  FPScategory();
}
function FPScategory(){
  cards.innerHTML="";
  let found =false;
  for(let i =0 ;i<games.length;i++){
    if("FPS"==games[i].category){
      found=true;
       cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;
    }
  }

}

All.onclick=function(){
  cards.innerHTML="";

for(let i = 0; i < games.length; i++){
   cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;
}
}
let Sport=document.getElementById("Sport");
Sport.onclick=function(){
  Sportcategory();
}
function Sportcategory(){
  cards.innerHTML="";
  let found=false;
  for(let i=0 ; i<games.length;i++){
    if("Sport"==games[i].category){
      found=true;
      cards.innerHTML += `
    <div class="bg-white p-4 rounded-xl shadow lg:w-64 w-[90%]  ">
      <img src="${games[i].image}" class="w-full h-40 object-cover rounded-lg mb-2">
      <div  class="flex justify-between items-center mb-1">
      <h2 class="font-bold text-lg">${games[i].title}</h2>
      <button onclick="addToCart('${games[i].title}')" class="mt-2">
        <img src="photos/ajouter-au-panier.png" class="w-6 h-6">
      </button>
      
      </div>
      <p class="text-gray-500">${games[i].category}</p>
      <p class="text-blue-600 font-semibold">${games[i].price}$</p>
       
          </div>
  `;
    }
  }
}


























export function localitems(){
  localStorage.setItem("sac" , JSON.stringify(games))
  }
  export function getitems(){
    if(localStorage.getItem("sac")){
      let games =JSON.parse(localStorage.getItem("sac"))
    }
  }
  
