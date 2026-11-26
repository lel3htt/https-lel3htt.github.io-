// Menu responsivo para celulares.
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", aberto);
  });
}

// Ano atualizado automaticamente no rodapé.
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
