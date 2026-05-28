export const BASE_URL = 'http://localhost:3000';

// listar produtos
export async function fetchProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
}

// criar pedido
export async function criarPedido(pedido) {
    const response = await fetch(`${BASE_URL}/pedidos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pedido)
    });
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
}

// listar pedidos
export async function fetchPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
}