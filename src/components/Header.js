const FRONT_URL = 'http://127.0.0.1:5500';

document.addEventListener('DOMContentLoaded', async () => {
    const produtosList = document.getElementById('header-container');
    produtosList.innerHTML = `
      <nav>
          <a href="${FRONT_URL}/index.html">Home</a>
          <a href="#">Horários</a>
          <a href="#">Sobre</a>
      </nav>
      <div class="logo-container">
          <div class="logo-main">Pizza<span>lab</span></div>
          <span class="logo-sub">Pizzaria - Delivery</span>
      </div>
      <div class="user-icon" href="${FRONT_URL}/login.html">
          <a href="${FRONT_URL}/login.html">login</a>
      </div>
    `;   
});