import { Platform } from 'react-native';

const isAndroid = () => Platform.OS === 'android';
const isIos = () => Platform.OS === 'ios';

const IOS = '3';
const ANDROID = '2';
const getPlatform = () => (PlatformUtils.isIos ? IOS : ANDROID);

const PlatformUtils = {
  isAndroid,
  isIos,
  getPlatform,
};

export default PlatformUtils;
