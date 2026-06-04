import { fetchAddProduto, fetchEditProduto } from '../services/api.js';
import { atualizarTabelaProdutos } from './TableProducts.js';

export async function ProductPanel() {
  const form = document.getElementById('product-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const id = document.getElementById('prod-id').value;
    const dados = {
      nome: document.getElementById('prod-nome').value.trim(),
      categoria: document.getElementById('prod-categoria').value,
      nome_variacao: document.getElementById('prod-tamanho').value,
      preco: parseFloat(document.getElementById('prod-preco').value) * 100, //centavos
      descricao: document.getElementById('prod-descricao').value.trim(),
    }

    if (id){
      try{
        await fetchEditProduto(id, token, dados);

      } catch(error){
        alert(error.message);
      }

    } else {
      await fetchAddProduto(dados, token);
    }

    await atualizarTabelaProdutos();
    e.target.reset();
    document.getElementById('prod-id').value = "";
  });
  
  return `
    <input type="hidden" id="prod-id">
    <div class="input-group">
      <label for="prod-nome">Nome do Produto</label>
      <input type="text" id="prod-nome" placeholder="Ex: Calabresa Especial" required>
    </div>
    <div class="input-container">
    <div class="input-group">
      <label for="prod-categoria">Categoria</label>
      <select id="prod-categoria" class="input-control">
        <option value="Pizza">Pizza</option>
      </select>
    </div>

    <div class="input-group">
      <label for="prod-tamanho">Tamanho</label>
      <select id="prod-tamanho" class="input-control">
        <option value="Grande">Grande</option>
        <option value="Média">Média</option>
        <option value="Pequena">Pequena</option>
      </select>
    </div>
    </div>

    <div class="input-group">
      <label for="prod-preco">Preço de Venda (R$)</label>
      <input type="number" id="prod-preco" class="input-control" placeholder="0,00" step="0.01" min="0" required>
    </div>

    <div class="input-group">
      <label for="prod-descricao">Ingredientes / Descrição</label>
      <textarea id="prod-descricao" class="input-control" placeholder="Mussarela, calabresa fatiada, cebola e orégano..."></textarea>
    </div>

    <div class="btn-container">
      <button type="reset" class="btn-reset">Limpar</button>
      <button type="submit" class="btn-submit" id="btn-add">Salvar</button>
    </div>
  `;
}