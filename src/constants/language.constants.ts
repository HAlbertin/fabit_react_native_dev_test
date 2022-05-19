import { LANGUAGES, translate } from '../utils/language';
import { TranslationKeys } from '../utils/language/translations/translations.interface';

export const LANGUAGES_LIST = LANGUAGES.map(item => {
  return {
    key: item.lang,
    value: translate(item.name as TranslationKeys),
  };
});
