import { fetchProdutosDoPedido } from "../services/api.js"; 

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


export async function renderizarCarrinho() {
  try {
    const token = localStorage.getItem('token');
    const pedido = await fetchProdutosDoPedido(token);
    console.log(pedido)
    return `
      <div class="header-container">
        <h2>Meu Pedido</h2>
      </div>

      <div class="card-container" id="cart-items">
        ${pedido.Produtos.map(p => renderItem(p)).join('')}
      </div>

      <div class="aside-footer">
        <div class="total-row">
          <span>Total:</span>
          <span id="total">${precoFormatado(pedido.valor_total) || "0,00"}</span>
        </div>
        <button class="checkout-btn">Finalizar Pedido</button>
      </div>
    `;

    //produtosRenderizados = produtos.map(p => renderItem(p)).join('');

  } catch (error) {
    console.error('Não foi possível carregar o carrinho:', error);
      return `<p class="info-aviso">Login<br> necessário</p>`;
  }

//   return `
//     <div class="header-container">
//       <h2>Meu Pedido</h2>
//     </div>

//     <div class="card-container" id="cart-items">
//     ${produtosRenderizados}
//     </div>

//     <div class="aside-footer">
//       <div class="total-row">
//         <span>Total:</span>
//         <span id="total">${precoFormatado(pedido.valor_total) || "0,00"}</span>
//       </div>
//       <button class="checkout-btn">Finalizar Pedido</button>
//     </div>
//   `;

// const produtosList = document.getElementById('cart-items');
// const total = document.getElementById('total');  
//   try {
//     const token = localStorage.getItem('token');
//     const pedido = await fetchProdutosDoPedido(token);
//     const produtos = pedido.Produtos;
//     produtosList.innerHTML = produtos.map(item => CartItem(item)).join('');

//     total.innerText = precoFormatado(pedido.valor_total);

//   } catch (error) {
//     console.error('Não foi possível carregar o carrinho:', error);
//     produtosList.innerHTML = `<p class="info-aviso">Login<br> necessário</p>`;
//     total.textContent = 'R$ 0,00';
//   }    
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