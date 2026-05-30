import { CartItem } from "./CartItem.js";
import { fetchProdutosDoPedido } from "../services/api.js"; 

export async function atualizarPedido() {
    const produtosList = document.getElementById('cart-items');  
    try {
        const token = localStorage.getItem('token');
        const pizzas = await fetchProdutosDoPedido(token);
        console.log(pizzas);
        produtosList.innerHTML = pizzas.map(pizza => CartItem(pizza)).join('');

    } catch (error) {
        console.error('Não foi possível carregar o carrinho:', error);
        produtosList.innerHTML = `<p class="erro-aviso">Erro ao carregar o carrinho. Verifique a conexão.</p>`;
    }    
}