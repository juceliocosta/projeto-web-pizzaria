import { Header } from "./components/Header.js";
import { HeaderAdmin } from "./components/HeaderAdmin.js";
import { Menu } from "./components/Menu.js";
import { TableProducts } from "./components/TableProducts.js";
import { ProductPanel } from "./components/ProductPanel.js";
import { fetchDeleteProduto, fetchProdutos } from '../src/services/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const containerIds = {
    'header-container': Header(),
    'headerAdmin-container': HeaderAdmin(),
    'menu-container': await Menu('add-btn', 'data-id'),
    'table-container': await TableProducts('btn-edit', 'btn-delete', 'data-editId', 'data-deleteId'),
    'product-form': await ProductPanel()
  };

  Object.entries(containerIds).forEach(([id, content]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = content;
  });

  // evento único para toda a página
  document.body.addEventListener('click', async (e) => {
    // Ação de Editar
    if (e.target.closest('.btn-edit')) {
      const btn = e.target.closest('.btn-edit');
      const id = btn.getAttribute('data-editId');

      const produtos = await fetchProdutos();
      const produto = produtos.find(p => p.id == id);
      if (produto) preencherFormularioEdicao(produto);
    }

    // Ação de Deletar
    if (e.target.closest('.btn-delete')) {
      const btn = e.target.closest('.btn-delete');
      const id = btn.getAttribute('data-deleteId');

      await fetchDeleteProduto(id, localStorage.getItem('token'));
      await atualizarTabelaProdutos();
    }
  });
});

const preencherFormularioEdicao = (p) => {
  document.getElementById('prod-id').value = p.id || '';
  document.getElementById('prod-nome').value = p.nome || '';
  document.getElementById('prod-categoria').value = p.categoria || '';
  document.getElementById('prod-tamanho').value = p.nome_variacao || '';
  document.getElementById('prod-preco').value = (p.preco / 100).toFixed(2);
  document.getElementById('prod-descricao').value = p.descricao || '';
};