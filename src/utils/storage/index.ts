import { MMKV } from 'react-native-mmkv';
import StorageConstants from '../../constants/storage.constants';

const storage = new MMKV();

type storageKeys = keyof typeof StorageConstants;

const setItem = (keyName: storageKeys, value: string | number | boolean) => {
  storage.set(StorageConstants[keyName], value);
};

const getItem = (keyName: storageKeys) => storage.getString(StorageConstants[keyName]);

const deleteItem = (keyName: storageKeys) => storage.delete(keyName);

const StorageUtils = {
  setItem,
  getItem,
  deleteItem,
};

export default StorageUtils;
