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

export async function fetchPedidosDoUsuario(token) {
    const response = await fetch(`${BASE_URL}/pedidos`, {
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}

export async function fetchSignup(nome, email, senha) {
    const response = await fetch(`${BASE_URL}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}

export async function fetchLogin(email, senha) {
    const response = await fetch(`${BASE_URL}/usuarios/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}

//adicionar produto ao pedido com authetication
export async function fetchAddProdutoAoPedido(produto_id, token) {
    const response = await fetch(`${BASE_URL}/pedidos/produtos`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ produto_id })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}

export async function fetchRemoveProdutoDoPedido(produto_id, token) {
    console.log(`Removendo produto ${produto_id} do pedido com token ${token}`);
    const response = await fetch(`${BASE_URL}/pedidos/produtos/${produto_id}`, {
        method: 'DELETE',
        headers: { 
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}

// listar produtos do pedido com authetication
export async function fetchProdutosDoPedido(token) {
    const response = await fetch(`${BASE_URL}/pedidos`, {
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error);
    }
    return data;
}