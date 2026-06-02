import { Header } from "./components/Header.js";
import { HeaderAdmin } from "./components/HeaderAdmin.js";
import { Menu } from "./components/Menu.js";
import { TableProducts } from "./components/TableProducts.js";
import { ProductPanel } from "./components/ProductPanel.js";

document.addEventListener('DOMContentLoaded', async () => {
  const header = document.getElementById('header-container');
  if (header) header.innerHTML = Header();

  const headerAdmin = document.getElementById('headerAdmin-container');
  if (headerAdmin) headerAdmin.innerHTML = HeaderAdmin();

  const menu = document.getElementById('menu-container');
  if (menu) menu.innerHTML = await Menu('add-btn', 'data-id');

  const products = document.getElementById('table-container');
  if (products) products.innerHTML = await TableProducts('btn-edit','btn-delete', 'data-editId', 'data-deleteId');

  const productForm = document.getElementById('product-form');
  if (productForm) productForm.innerHTML = await ProductPanel();

});