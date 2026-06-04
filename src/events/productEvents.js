import { fetchDeleteProduto } from '../services/api.js';

export function initProductEvents() {
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
}