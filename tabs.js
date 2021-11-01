// let tabHeader = document.querySelectorAll(".tabHeader");

// tabHeader.forEach((button) => {
//   button.onclick = changeTabHeader;
// });

// function changeTabHeader() {
//   let tabNumber = parseInt(this.dataset.tab);

//   document.querySelector(".active-tab").classList.remove("active-tab");
//   this.classList.add("active-tab");

//   switch (tabNumber) {
//     case 1:
//       changeTabSection(tabNumber);
//       break;
//     case 2:
//       changeTabSection(tabNumber);
//       break;
//     case 3:
//       changeTabSection(tabNumber);
//       break;
//     case 4:
//       changeTabSection(tabNumber);
//       break;
//     default:
//       break;
//   }
// }

// function changeTabSection(tabNumber) {
//   let currentTab = document.querySelector(".show-tab");
//   currentTab.classList.remove("show-tab");
//   currentTab.classList.add("hide-tab");

//   let newSection = document.getElementById("tabSection-" + tabNumber);

//   newSection.classList.remove("hide-tab");
//   newSection.classList.add("show-tab");
// }
let tabHeader = document.querySelectorAll(".tabHeader");
let btnCupcakes = document.querySelector(".btncupcakes");
let btnCakes = document.querySelector(".btncakes");
let btnMore = document.querySelector(".btnmore");
let tabSection1 = document.querySelector("#tabSection-1");
let tabSection2 = document.querySelector("#tabSection-2");
let tabSection4 = document.querySelector("#tabSection-4");
let order = document.querySelector("#order")


//highlight Cupcakes Button
btnCupcakes.addEventListener("click", e => {
  order.appendChild(tabSection1)
  btnMore.classList.remove("active-tab");
  btnCupcakes.classList.add("active-tab");
  btnCakes.classList.remove("active-tab");
  tabSection2.remove();
  tabSection4.remove();
})

//highlight Cakes Button
btnCakes.addEventListener("click", e => {
order.appendChild(tabSection2)
btnCupcakes.classList.remove("active-tab")
btnCakes.classList.add("active-tab");
btnMore.classList.remove("active-tab");
  tabSection1.remove();
  tabSection4.remove();
})

//highlight More button
btnMore.addEventListener("click", e => {
  order.appendChild(tabSection4)
  btnCakes.classList.remove("active-tab");
  btnCupcakes.classList.remove("active-tab");
 btnMore.classList.add("active-tab");
  tabSection2.remove();
  tabSection1.remove();
}, {capture: true})