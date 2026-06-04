import { CartItem } from "./CartItem.js";
import { 
    fetchProdutosDoPedido, 
    fetchRemoveProdutoDoPedido 
} from "../services/api.js"; 

function precoFormatado(preco) {
    return (preco/100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export async function renderizarCarrinho() {
    const produtosList = document.getElementById('cart-items');
    const total = document.getElementById('total');  
    try {
        const token = localStorage.getItem('token');
        const pedido = await fetchProdutosDoPedido(token);
        const produtos = pedido.Produtos;
        produtosList.innerHTML = produtos.map(item => CartItem(item)).join('');

        total.innerText = precoFormatado(pedido.valor_total);

    } catch (error) {
        console.error('Não foi possível carregar o carrinho:', error);
        produtosList.innerHTML = `<p class="info-aviso">Login<br> necessário</p>`;
        total.textContent = 'R$ 0,00';
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