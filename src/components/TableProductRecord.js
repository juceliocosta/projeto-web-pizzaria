export function TableProductRecord(product) {
  //Formata o preço para a moeda local (R$)
  const precoFormatado = (product.preco/100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  
  return `
    <tr id="${product.id}" data-prodId="${product.id}">
      <td>
        <div class="product-cell">
          <div class="product-info">
            <div class="name">${product.nome}</div>
            <div class="category">${product.categoria}</div>
          </div>
        </div>
      </td>
      <td>${product.nome_variacao}</td>
      <td>${product.descricao}</td>
      <strong><td>R$ ${precoFormatado}</td></strong>
      <td>
        <div class="actions" style="justify-content: center;">
          <button class="btn-action btn-edit" id="btn-edit" data-editId="${product.id}">Editar</button>
          <button class="btn-action btn-delete" id="btn-delete" data-deleteId="${product.id}">Excluir</button>
        </div>
      </td>
    </tr>
  `;
}