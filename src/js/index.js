import keys from './keys';
import markup from './markup';
import utils from './utils';

// TODO: переключение языков.+
// сохранение языка в localStorage.+
// анимация по нажатию на кнопку.
// организовать функционал таких кнопок как стереть ентер таб и т.д.+
// Повесить observer на state and keys и если изменились то вызвать перерендеринг+
// рефакторинг js and css files+

window.onload = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.innerHTML = markup;
  body.appendChild(div);

  const arrayOfKeys = document.querySelectorAll('.key');
  const langBtn = document.querySelector('.lang-btn');
  const li = document.querySelectorAll('li');

  utils.changeLangKey();

  arrayOfKeys.forEach((element) => element.addEventListener('click', (e) => {
    e.preventDefault();

    const event = new Event('keypress');
    const { keyName } = keys[element.getAttribute('data-key')];

    event.key = keyName[keyName.isLetter ? 'en' : 'first'];

    document.dispatchEvent(event);
  }));

  document.addEventListener('keydown', (e) => {
    utils.keyDown(e);
  });

  document.addEventListener('keyup', (e) => {
    utils.keyUp(e);
  });

  langBtn.addEventListener('click', (e) => {
    utils.langbtnClick(e);
  });

  li.forEach((el) => {
    el.addEventListener('click', (e) => {
      utils.langbtnClick(e, el);
    });
  });
};
