import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import de from './translations/de';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr';
import it from './translations/it';
import pt from './translations/pt';
import { TranslationKeys } from './translations/translations.interface';

const LANGUAGES = [
  { lang: 'pt', file: pt },
  { lang: 'en', file: en },
  { lang: 'es', file: es },
  { lang: 'it', file: it },
  { lang: 'de', file: de },
  { lang: 'fr', file: fr },
];

// Set the key-value pairs for the different languages you want to support.
i18n.translations = LANGUAGES.reduce((translations, { lang, file }) => {
  translations[lang] = file;
  return translations;
}, {});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export const changeLanguage = (newLocale: string) => {
  i18n.locale = newLocale;
};

export const translate = (key: TranslationKeys): string => i18n.t(key);
