import cards from '../menu.json';
import menuCardTpl from '../templates/menu-cards.hbs';

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', createMenuMarkup());

function createMenuMarkup() {
  return menuCardTpl(cards);
}
