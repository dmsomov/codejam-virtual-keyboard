import keys from './keys';
import markup from './markup';
import state from './state';
import utils from './utils';

// TODO: переключение языков.
// сохранение языка в localStorage.
// анимация по нажатию на кнопку.
// организовать функционал таких кнопок как стереть ентер таб и т.д.
// Повесить observer на state and keys и если изменились то вызвать перерендеринг
// рефакторинг js and css files

window.onload = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.innerHTML = markup;
  body.appendChild(div);

  const arrayOfKeys = document.querySelectorAll('.key');
  const textArea = document.querySelector('.textarea');
  const langBtn = document.querySelector('.lang-btn');
  const li = document.querySelectorAll('li');

  arrayOfKeys.forEach((element) => element.addEventListener('click', (e) => {
    e.preventDefault();

    const event = new Event('keypress');
    const { keyName } = keys[element.getAttribute('data-key')];

    event.key = keyName[keyName.isLetter ? 'en' : 'first'];

    document.dispatchEvent(event);
  }));

  document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);
    const numEl = element.getAttribute('data-key');

    if (+numEl === 8) {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (+numEl === 13) {
      textArea.value += '\n';
    } else if (+numEl === 9) {
      textArea.value += '\t';
    } else if (+numEl === 32) {
      textArea.value += ' 1';
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    }

    element.classList.add('hover');
    if (!keys[e.keyCode].isSysBtn) textArea.value += e.key;
  });

  document.addEventListener('keyup', (e) => {
    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);

    element.classList.remove('hover');
  });

  langBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const lang = document.querySelector('.lang-btn');

    utils.toggleLanguage(state);
    localStorage.setItem('Lang', utils.activelanguage(state));
    lang.innerHTML = utils.activelanguage(state);
    utils.changeLangKey();
  });

  li.forEach((el) => {
    el.addEventListener('click', () => {
      const numEl = el.getAttribute('data-key');
      const { keyName } = keys[numEl];

      if (+numEl === 8) {
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
      } else if (+numEl === 13) {
        textArea.value += '\n';
      } else if (+numEl === 9) {
        textArea.value += '\t';
      } else if (+numEl === 32) {
        textArea.value += ' 1';
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
      }
      textArea.value += keyName[keys[numEl].isLetter ? 'en' : 'first'];
    });
  });
};
