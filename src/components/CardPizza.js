export function CardPizza(pizza) {
  //Formata o preço para a moeda local (R$)
  const precoFormatado = (pizza.preco/100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return `
    <div class="pizza-card">
        <img src="./assets/images/pizzas/${pizza.nome}.jpeg" alt="${pizza.nome}" class="pizza-img">
        <div class="pizza-info">
            <h3>${pizza.nome} - ${pizza.nome_variacao}</h3>
            <p>${pizza.descricao}</p>
            <div class="price-tag">${precoFormatado}</div>
            <button class="add-btn" data-id="${pizza.id}">Adicionar ao Pedido</button>
        </div>
    </div>
  `;
}
