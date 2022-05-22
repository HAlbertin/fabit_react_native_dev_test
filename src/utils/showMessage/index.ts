import { Alert } from 'react-native';
import { translate } from '../language';
import { TranslationKeys } from '../language/translations/translations.interface';

const showMessage = (title: TranslationKeys, message?: TranslationKeys) =>
  Alert.alert(translate(title), message ? translate(message) : '');

const ShowMessageUtils = {
  showMessage,
};

export default ShowMessageUtils;
