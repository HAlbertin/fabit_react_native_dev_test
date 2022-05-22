/**
 * Configure Reactotron
 * For only dev purposes, disable the definition rule in this js
 */
/* eslint-disable no-undef */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // in android emulator, get the IP of your network
  const tron = Reactotron.configure({
    host: '127.0.0.1',
  })
    .useReactNative()
    .connect();
  tron.clear();
  console.tron = tron;
}
