import GeraCPF from "./modules/GeraCPF";
import "./assets/css/style.css";

(function () {
  const btn = document.querySelector(".gerar");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector(".cpf-gerado");

    cpfGerado.innerHTML = gera.geraNovoCpf();
  });
})();
