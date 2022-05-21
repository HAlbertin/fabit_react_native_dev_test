import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import StorageUtils from '../storage';
import de from './translations/de';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr';
import it from './translations/it';
import pt from './translations/pt';
import { TranslationKeys } from './translations/translations.interface';

export const getCurrentLocale = () => Localization.locale;

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_TRANSLATION = {
  key: DEFAULT_LANGUAGE,
  value: 'English',
};

export const getCurrentLanguage = () => StorageUtils.getItem('USER_LANGUAGE') ?? DEFAULT_LANGUAGE;

export const changeLanguage = (newLocale: string) => {
  i18n.locale = newLocale;
};

export const translate = (key: TranslationKeys): string => i18n.t(key);

export const LANGUAGES = [
  { lang: 'pt', file: pt, name: 'Language_Pt' },
  { lang: 'en', file: en, name: 'Language_En' },
  { lang: 'es', file: es, name: 'Language_Es' },
  { lang: 'it', file: it, name: 'Language_It' },
  { lang: 'de', file: de, name: 'Language_De' },
  { lang: 'fr', file: fr, name: 'Language_Fr' },
];

const setupInitialLanguage = () => {
  i18n.fallbacks = true;

  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = LANGUAGES.reduce((translations, { lang, file }) => {
    translations[lang] = file;
    return translations;
  }, {});

  // Set the locale once at the beginning of your app.
  i18n.locale = getCurrentLocale();
};

setupInitialLanguage();
