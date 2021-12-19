import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import en from './locales/en-US';
// import es from './locales/es-ES';

const locales = RNLocalize.getLocales();
let language = 'en';
const availableTranslations = ['en'];
if (Array.isArray(locales)) {
  const deviceLanguages = locales.map(item => item.languageCode);
  const mainLanguageToTranslate = deviceLanguages.filter(item =>
    availableTranslations.includes(item),
  );
  language =
    mainLanguageToTranslate.length > 0 ? mainLanguageToTranslate[0] : 'en';
}
I18n.defaultLocale = 'en';
I18n.locale = language;

I18n.fallbacks = true;
I18n.translations = {
  en,
};

export default I18n;
