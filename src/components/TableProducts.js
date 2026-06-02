import { fetchDeleteProduto, fetchEditProduto, fetchProdutos } from '../services/api.js';
import { TableProductRecord } from './TableProductRecord.js';

export async function TableProducts(classEdit, classDelete, dataEditId, dataDeleteId) {
  
  let produtos =  await fetchProdutos();
  
  const preencherFormularioEdicao = (produto) => {
    document.getElementById('prod-nome').value = produto.nome || '';
    document.getElementById('prod-categoria').value = produto.categoria || '';
    document.getElementById('prod-tamanho').value = produto.nome_variacao || '';
    document.getElementById('prod-preco').value = (produto.preco / 100).toFixed(2) || '';
    document.getElementById('prod-descricao').value = produto.descricao || '';
  };

  // Evento de edição de produto
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest(`.${classEdit}`);
    if (btn) {
      const product_id = btn.getAttribute(dataEditId);
      if (!product_id) {
        alert('ID do produto não encontrado para edição.');
        return;
      }
      const produto = produtos.find(p => p.id == product_id);   
      preencherFormularioEdicao(produto); 
      console.log(produto)     
    }
  });

  // Evento de exclusão de produto
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains(classDelete)) {
      const product_id = e.target.getAttribute(dataDeleteId);
      e.preventDefault();
      
      try {
        const token = localStorage.getItem('token');
        const data = await fetchDeleteProduto(product_id, token);
        console.log(data.message);
      } catch (error) {
        alert(data.error);
      }
    }
  });
  
  try {
    console.log('Produtos carregados com sucesso!');

    return `
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Tamanho</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th style="text-align: center;">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${produtos.map(produto => TableProductRecord(produto)).join('')}
        </tbody>
      </table>
    `;

  } catch (error) {
    console.error('Não foi possível carregar os produtos:', error);
    return `<p class="erro-aviso">Erro ao carregar os produtos. Verifique a conexão.</p>`;
  }
}