const utils = {
  activelanguage({ language }) {
    if (language.ru) return 'RU';

    return 'EN';
  },
  toggleLanguage({ language }) {
    language.ru = !language.ru;
    language.en = !language.en;
  },
};

export default utils;
