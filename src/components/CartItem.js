export function CartItem(pizza) {
  //Formata o preço para a moeda local (R$)
  const precoFormatado = (pizza.preco/100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return `
    <div class="cart-item">
      <div>
        <strong>${pizza.PedidoProduto.quantidade}x ${pizza.nome}</strong><br>
        <small>${pizza.nome_variacao}</small>
      </div>
      <div style="text-align: right;">
        <span>${precoFormatado}</span><br>
        <button class="remove-btn" data-itemId="${pizza.id}">Remover</button>
      </div>
    </div>
  `;
}