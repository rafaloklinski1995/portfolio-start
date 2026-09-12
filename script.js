const aktualnyRok = new Date().getFullYear();

document.querySelector("#rok").textContent = aktualnyRok;
const przyciskTekstu = document.querySelector("#przelacz-tekst");
const tekstJestZapamietanyWiekszy =
  localStorage.getItem("wiekszy-tekst") === "true";

if (tekstJestZapamietanyWiekszy) {
  document.body.classList.add("wiekszy-tekst");
  przyciskTekstu.textContent = "Przywróć zwykły tekst";
  przyciskTekstu.setAttribute("aria-pressed", "true");
}

przyciskTekstu.addEventListener("click", () => {
  const tekstJestWiekszy = document.body.classList.toggle("wiekszy-tekst");

  przyciskTekstu.textContent = tekstJestWiekszy
    ? "Przywróć zwykły tekst"
    : "Powiększ tekst";

  przyciskTekstu.setAttribute("aria-pressed", tekstJestWiekszy);
  localStorage.setItem("wiekszy-tekst", tekstJestWiekszy);
});
