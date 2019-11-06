import keys from './keys';
import state from './state';

const utils = {
  activelanguage({ language }) {
    if (language.ru) return 'RU';

    return 'EN';
  },
  toggleLanguage({ language }) {
    language.ru = !language.ru;
    language.en = !language.en;
  },
  changeLangKey() {
    const li = document.querySelectorAll('li');
    const actLang = localStorage.getItem('Lang') || utils.activelanguage(state);
    li.forEach((el) => {
      if (keys[el.getAttribute('data-key')].isLetter === true) {
        el.innerHTML = [actLang === 'RU' ? keys[el.getAttribute('data-key')].keyName.ru : keys[el.getAttribute('data-key')].keyName.en];
      }
    });
  },
  keyDown(e) {
    e.preventDefault();

    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);
    const numEl = element.getAttribute('data-key');
    const textArea = document.querySelector('.textarea');

    if (+numEl === 8) {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (+numEl === 13) {
      textArea.value += '\n';
    } else if (+numEl === 9) {
      textArea.value += '\t';
    } else if (+numEl === 32) {
      textArea.value += ' 1';
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (+numEl === 16) {
      keys[16].isShift = true;
    } else if (+numEl === 18) {
      keys[18].isAlt = true;
    }

    element.classList.add('hover');

    if (keys[numEl].isLetter === true) {
      textArea.value += [utils.activelanguage(state) === 'RU' ? keys[numEl].keyName.ru : keys[numEl].keyName.en];
    }
  },
  keyUp(e) {
    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);
    const numEl = element.getAttribute('data-key');

    if (+numEl === 16) {
      if (keys[18].isAlt && keys[16].isShift) {
        const lang = document.querySelector('.lang-btn');

        utils.toggleLanguage(state);
        localStorage.setItem('Lang', utils.activelanguage(state));
        lang.innerHTML = utils.activelanguage(state);
        utils.changeLangKey();
        keys[16].isShift = false;
        keys[18].isAlt = false;
      }
      keys[16].isShift = false;
    } else if (+numEl === 18) {
      if (keys[16].isShift && keys[18].isAlt) {
        const lang = document.querySelector('.lang-btn');

        utils.toggleLanguage(state);
        localStorage.setItem('Lang', utils.activelanguage(state));
        lang.innerHTML = utils.activelanguage(state);
        utils.changeLangKey();
        keys[16].isShift = false;
        keys[18].isAlt = false;
      }
      keys[18].isShift = false;
    }
    element.classList.remove('hover');
  },
  mouseClick(e) {
    e.preventDefault();

    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);
    const numEl = element.getAttribute('data-key');
    const textArea = document.querySelector('.textarea');

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
  },
  langbtnClick(e, el) {
    e.preventDefault();

    const textArea = document.querySelector('.textarea');
    const numEl = el.getAttribute('data-key');
    const { keyName } = keys[numEl];
    const langBut = document.querySelector('.lang-btn');
    const lang = [langBut.innerHTML === 'RU' ? 'ru' : 'en'];

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
    textArea.value += keyName[keys[numEl].isLetter ? lang : 'first'];
  },
};

export default utils;
