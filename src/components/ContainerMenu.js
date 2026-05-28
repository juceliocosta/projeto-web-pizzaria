import { CardPizza } from './CardPizza.js';
import { fetchProdutos } from '../services/api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const produtosList = document.getElementById('menu-container');
    
    try {
        const pizzas = await fetchProdutos();
        produtosList.innerHTML = pizzas.map(pizza => CardPizza(pizza)).join('');

    } catch (error) {
        console.error('Não foi possível carregar o cardápio:', error);
        produtosList.innerHTML = `<p class="erro-aviso">Erro ao carregar o cardápio. Verifique a conexão.</p>`;
    }    
});