const tabBtns = document.querySelectorAll(".tabs-btn");
const cards = document.querySelectorAll(".card");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) return;
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    cards.forEach((card) => card.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
