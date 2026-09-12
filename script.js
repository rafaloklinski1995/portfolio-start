const aktualnyRok = new Date().getFullYear();

document.querySelector("#rok").textContent = aktualnyRok;
const przyciskTekstu = document.querySelector("#przelacz-tekst");

przyciskTekstu.addEventListener("click", () => {
  const tekstJestWiekszy = document.body.classList.toggle("wiekszy-tekst");

  przyciskTekstu.textContent = tekstJestWiekszy
    ? "Przywróć zwykły tekst"
    : "Powiększ tekst";

  przyciskTekstu.setAttribute("aria-pressed", tekstJestWiekszy);
});
