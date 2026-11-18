# Pizzalab - Projeto Web Pizzaria

Este é um projeto de uma aplicação web simulando uma pizzaria, desenvolvido para para fins didáticos e exploração de conceitos de frontend moderno.

## Funcionalidades
- Visualização do cardápio de pizzas com imagens, descrições e preços.
- Adição de pizzas ao carrinho de compras.
- Visualização e edição do carrinho antes de finalizar o pedido.
- Integração com uma API para buscar os produtos dinamicamente.

## Como funciona
O frontend consome uma API REST para listar os sabores de pizza disponíveis. O usuário pode navegar pelo cardápio, adicionar itens ao carrinho e visualizar o pedido antes de finalizar.

## Rodar o projeto localmente
- clone esse repositório e abra no vscode, instale a extenção LiveServer e rode na porta 5500.
- clone o repositório [projeto-api-pizzaria](https://github.com/juceliocosta/projeto-api-pizzaria)
  - instale as dependências: `npm install`
  - rode a API localmente no modo desenvolvedor: `npm run dev`
  - faça login do usuário utilizando o email e senha do arquivo env.example do projeto-api-pizzaria
