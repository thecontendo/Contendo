import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  let tron;
  if (Reactotron.setAsyncStorageHandler) {
    tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure({
        name: 'com.contendo',
        host: '172.25.32.1', // Update local IP adress
      })
      .useReactNative()
      .connect();
  }

  if (tron && tron.clear && tron.log && tron.logImportant && tron.error) {
    tron.clear();
    // @ts-ignore
    console.tron = tron;
  }
} else {
  // @ts-ignore
  console.tron = {
    log: () => {},
    logImportant: () => {},
    error: () => {},
  };
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.debug = () => {};
}
