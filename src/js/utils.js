import keys from './keys';

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
    const lang = document.querySelector('.lang-btn');

    li.forEach((el) => {
      if (keys[el.getAttribute('data-key')].isLetter) {
        el.innerHTML = [lang.innerHTML === 'RU' ? keys[el.getAttribute('data-key')].keyName.ru : keys[el.getAttribute('data-key')].keyName.en];
      }
    });
  },
};

export default utils;
