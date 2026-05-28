// import { CardPizza } from './components/CardPizza.js';

// // Executa automaticamente ao abrir a página
// document.addEventListener('DOMContentLoaded', async () => {
//     const produtosList = document.getElementById('menu-container');
//     try {
//         const response = await fetch('http://localhost:3000/produtos');
        
//         if (!response.ok) {
//             throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
//         }

//         const pizzas = await response.json();
        
//         // Injeta os cards no container do HTML
//         produtosList.innerHTML = pizzas.map(pizza => CardPizza(pizza)).join('');

//     } catch (error) {
//         console.error('Não foi possível carregar o cardápio:', error);
//         produtosList.innerHTML = `<p class="erro-aviso">Erro ao carregar o cardápio. Verifique a conexão.</p>`;
//     }    
// });
import { ContainerMenu } from './components/ContainerMenu.js';
document.addEventListener('DOMContentLoaded', async () => {
    await ContainerMenu();
});