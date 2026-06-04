import { fetchAddProdutoAoPedido } from '../services/api.js';
import { renderizarCarrinho } from '../components/CartPanel.js';

export async function adicionarAoCarrinho(e) {
  if (e.target.classList.contains('add-btn')) {
    const product_id = e.target.getAttribute('data-id');
    const token = localStorage.getItem('token');
    e.preventDefault();
    
    try {
      await fetchAddProdutoAoPedido(product_id, token);
      await renderizarCarrinho();
    } catch (error) {
      window.location.href = 'login.html';
    }
  }
}


// export function initCartEvents(classList, dataId) {
//   document.addEventListener('click', async (e) => {
//     if (e.target.classList.contains(classList)) {
//       const product_id = e.target.getAttribute(dataId);
//       const token = localStorage.getItem('token');
      
//       e.preventDefault();
      
//       try {
//         const data = await fetchAddProdutoAoPedido(product_id, token);
//         await atualizarPedido();
//         console.log(data.message);
//       } catch (error) {
//         window.location.href = 'login.html';
//       }
//     }
//   });
// };
  