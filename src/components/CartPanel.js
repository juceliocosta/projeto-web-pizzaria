import { CartItem } from "./CartItem.js";
import { 
    fetchProdutosDoPedido, 
    fetchRemoveProdutoDoPedido 
} from "../services/api.js"; 

export async function atualizarPedido() {
    const produtosList = document.getElementById('cart-items');  
    try {
        const token = localStorage.getItem('token');
        const pizzas = await fetchProdutosDoPedido(token);
        console.log(pizzas);
        produtosList.innerHTML = pizzas.map(pizza => CartItem(pizza)).join('');

    } catch (error) {
        console.error('Não foi possível carregar o carrinho:', error);
        produtosList.innerHTML = `<p class="info-aviso">Login<br> necessário</p>`;
    }    
}

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const pizza_id = e.target.getAttribute('data-itemId');
        const token = localStorage.getItem('token');
                
        e.preventDefault();
        
        try {
            const data = await fetchRemoveProdutoDoPedido(pizza_id, token);
            await atualizarPedido();
            console.log(data.message);
        } catch (error) {
            return;
        }
        await atualizarPedido();
    }
});