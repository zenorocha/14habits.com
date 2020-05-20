import i18n from 'i18n-js';
import translations from './translations';

i18n.fallbacks = true;
i18n.translations = translations;
i18n.locale = "pt-BR";

export default i18n;