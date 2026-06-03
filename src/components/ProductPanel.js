import { fetchAddProduto, fetchEditProduto, fetchProdutoById } from '../services/api.js';
import { atualizarTabelaProdutos } from './TableProducts.js';

export async function ProductPanel() {
  document.addEventListener('submit', async (e) => {
    if (e.target.id === 'product-form') {
      e.preventDefault();
      
      //const id = document.querySelector('[data-prodId]').getAttribute('data-prodId') || null; // ID oculto para edição, usando data-id
      let id = document.getElementById('prod-id').value || null; // ID oculto para edição
      const nome = document.getElementById('prod-nome').value.trim();
      const categoria = document.getElementById('prod-categoria').value;
      const nome_variacao = document.getElementById('prod-tamanho').value;
      const preco = parseFloat(document.getElementById('prod-preco').value) * 100; // Convertendo para centavos
      const descricao = document.getElementById('prod-descricao').value.trim();
      
      if (!nome || !categoria || !nome_variacao || isNaN(preco)) { // isNaN verifica se não é número
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const produto = await fetchProdutoById(id);

        if (produto == null || produto.id == null) {
          console.log("Adicionando novo produto");
          await fetchAddProduto({ nome, categoria, nome_variacao, descricao, preco }, token);
          id = null; // Limpa o ID após adicionar um novo produto
        } else {
          console.log("Editando produto existente com ID:", id);
          await fetchEditProduto(produto.id, token, { nome, categoria, nome_variacao, descricao, preco });
          id = null;
        }
        
        await atualizarTabelaProdutos();
        
        // Limpar o formulário após o envio bem-sucedido
        e.target.reset();
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        alert('Não foi possível adicionar o produto. Verifique os dados e tente novamente.');
      }
    }
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