import { fetchProdutos } from '../services/api.js';
import { TableProductRecord } from './TableProductRecord.js';

export async function atualizarTabelaProdutos() {
  const products = document.getElementById('table-container');
  if (products) products.innerHTML = await TableProducts('btn-edit','btn-delete', 'data-editId', 'data-deleteId');
}

export async function TableProducts() {
  const produtos = await fetchProdutos();
    
  return `
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Tamanho</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th style="text-align: center">Ações</th>
        </tr>
      </thead>
      <tbody>
        ${produtos.map(p => TableProductRecord(p)).join('')}
      </tbody>
    </table>
  `;
}