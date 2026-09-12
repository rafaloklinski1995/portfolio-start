const aktualnyRok = new Date().getFullYear();

document.querySelector("#rok").textContent = aktualnyRok;
const przyciskTekstu = document.querySelector("#przelacz-tekst");

przyciskTekstu.addEventListener("click", () => {
  document.body.classList.toggle("wiekszy-tekst");
});
