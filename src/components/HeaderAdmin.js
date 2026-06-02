import { FRONT_URL } from "../config.js";

export function HeaderAdmin() {
  return `
    <nav>
      <a href="#">Horários</a>
      <a href="${FRONT_URL}/product-manager.html">Produtos</a>
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