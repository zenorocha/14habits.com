import { I18n } from 'i18n-js';
import translations from './translations';

const i18n = new I18n(translations);
i18n.enableFallback = true;

export default i18n;