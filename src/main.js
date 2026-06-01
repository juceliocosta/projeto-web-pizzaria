import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";

document.addEventListener('DOMContentLoaded', async () => {
  const header = document.getElementById('header-container');
  if (header) header.innerHTML = Header();

  const menu = document.getElementById('menu-container');
  if (menu) menu.innerHTML = await Menu('add-btn', 'data-id');
});