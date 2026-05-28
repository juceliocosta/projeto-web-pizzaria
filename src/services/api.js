export const BASE_URL = 'http://localhost:3000';

// listar produtos
export async function fetchProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
}