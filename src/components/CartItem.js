import { fetchProdutosDoPedido } from "../services/api.js"; //fetchRemoveProdutoDoPedido 

export async function renderizarItensCarrinho() {
  
  const precoFormatado = (p) => {
   (p.preco/100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }); 
  }

  const renderItem = (p)=> {
    return `
      <div class="cart-item">
        <div>
          <strong>${p.PedidoProduto.quantidade}x ${p.nome}</strong><br>
          <small>${p.nome_variacao}</small>
        </div>
        <div style="text-align: right;">
          <span>${precoFormatado(p)}</span><br>
          <button class="remove-btn" data-itemId="${p.id}">Remover</button>
        </div>
      </div>
    `;
  }

  try {
    const token = localStorage.getItem('token');
    const pedido = await fetchProdutosDoPedido(token);
    const produtos = pedido.Produtos;

    return produtos.map(p => renderItem(p)).join('');

  } catch (error) {
    console.error('Não foi possível carregar o carrinho:', error);
    return `<p class="info-aviso">Login<br> necessário</p>`;
  } 
}