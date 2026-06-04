import { fetchRemoveProdutoDoPedido } from "../services/api.js";
import { renderizarCarrinho } from "../components/CartPanel.js";

export async function removerDoCarrinho(e) {
  if (e.target.classList.contains('remove-btn')) {
    const product_id = e.target.getAttribute('data-itemId');
    const token = localStorage.getItem('token');
    e.preventDefault();
    
    try {
      await fetchRemoveProdutoDoPedido(product_id, token);
      await renderizarCarrinho();
    } catch (error) {
      console.error("Erro ao remover do carrinho:", error);
    }
  }
}

// export function initCartEvents() {
//     document.body.addEventListener('click', async (e) => {
//         const btn = e.target.closest('.remove-btn');
//         if (!btn) return;

//         const pizza_id = btn.getAttribute('data-itemId');
//         const token = localStorage.getItem('token');
        
//         try {
//             await fetchRemoveProdutoDoPedido(pizza_id, token);
//             await renderizarCarrinho();
//         } catch (error) {
//             console.error("Erro ao remover do carrinho:", error);
//         }
//     });
// }