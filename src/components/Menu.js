import { CardPizza } from './CardPizza.js';
import { fetchProdutos } from '../services/api.js';
// import { fetchAddProdutoAoPedido } from '../services/api.js';
// import { atualizarPedido } from './CartPanel.js';

export async function renderizarMenu() {//classList, dataId
  // document.addEventListener('click', async (e) => {
  //   if (e.target.classList.contains(classList)) {
  //     const product_id = e.target.getAttribute(dataId);
  //     const token = localStorage.getItem('token');
      
  //     e.preventDefault();
      
  //     try {
  //       const data = await fetchAddProdutoAoPedido(product_id, token);
  //       await atualizarPedido();
  //       console.log(data.message);
  //     } catch (error) {
  //       window.location.href = 'login.html';
  //     }
  //   }
  // });

  try {
    const produtos = await fetchProdutos();
    // await atualizarPedido();

    return `${produtos.map(produto => CardPizza(produto)).join('')}`;

  } catch (error) {
    console.error('Não foi possível carregar o cardápio:', error);
    return `<p class="erro-aviso">Erro ao carregar o cardápio. Verifique a conexão.</p>`;
  }
}

