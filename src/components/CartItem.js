export function CartItem(pizza) {
  //Formata o preço para a moeda local (R$)
  const precoFormatado = (pizza.preco/100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return `
    <div class="cart-item">
      <div>
        <strong>1x ${pizza.nome}</strong><br>
        <small>${pizza.nome_variacao}</small>
      </div>
      <span>${precoFormatado}</span>
    </div>
  `;
}