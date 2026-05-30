import { CardPizza } from './CardPizza.js';
import { fetchProdutos } from '../services/api.js';
import { fetchAddProdutoAoPedido } from '../services/api.js';
import { atualizarPedido } from './CartPanel.js';

document.addEventListener('DOMContentLoaded', async () => {
    const produtosList = document.getElementById('menu-container');
    
    try {
        const pizzas = await fetchProdutos();
        await atualizarPedido();
        produtosList.innerHTML = pizzas.map(pizza => CardPizza(pizza)).join('');
      
    } catch (error) {
        console.error('Não foi possível carregar o cardápio:', error);
        produtosList.innerHTML = `<p class="erro-aviso">Erro ao carregar o cardápio. Verifique a conexão.</p>`;
    }  
});

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('add-btn')) {
        const pizza_id = e.target.getAttribute('data-id');
        const token = localStorage.getItem('token');
        
        e.preventDefault();
        
        try {
            const data = await fetchAddProdutoAoPedido(pizza_id, token);
            await atualizarPedido();
            console.log(data.message);
        } catch (error) {
            window.location.href = 'login.html';
        }
    }
});