import { FRONT_URL } from "../config.js";

export function renderizarHeader() {
  return `
    <nav>
        <a href="${FRONT_URL}/index.html">Home</a>
        <a href="#">Horários</a>
        <a href="#">Sobre</a>
    </nav>
    <div class="logo-container">
        <div class="logo-main">Pizza<span>lab</span></div>
        <span class="logo-sub">Pizzaria - Delivery</span>
    </div>
    <div>
      <a href="${FRONT_URL}/login.html" class="user-icon"><i class="fa-solid fa-user"></i></a>
    </div>
  `;
}