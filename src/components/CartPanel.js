import { CartItem } from "./CartItem";

document.addEventListener('DOMContentLoaded', async () => {
    const produtosList = document.getElementById('cart-panel');
    
    try {
        const pizzas = await fetchProdutos();
        produtosList.innerHTML = pizzas.map(pizza => CartItem(pizza)).join('');

    } catch (error) {
        console.error('Não foi possível carregar o carrinho:', error);
        produtosList.innerHTML = `<p class="erro-aviso">Erro ao carregar o carrinho. Verifique a conexão.</p>`;
    }    
});