/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = './cars.json';

async function importData() {
  const response = await fetch(ENDPOINT);
  const cars = await response.json();
  getCars(cars);
}

function getCars(cars) {
  console.log(cars)
  // document.getElementById("loading").style.visibility = "hidden";
};

importData();

//   function createUserCard (user){  

//     const img = document.createElement('img');
//     img.src = user.avatar_url;
//     img.alt = `${user.login} profile picture`;

//     const login = document.createElement('h4');
//     login.innerText = user.login; 

//     const card = document.createElement('div');
//     card.append(login, img);

//     document.getElementById("output").append(card);
//   }

//   function changeView(){
//     document.getElementById("message").style.visibility ="collapse";
//     document.getElementById("output").style.textAlign = "center";
//   };