import AsyncStorage from '@react-native-community/async-storage';

const getAsyncValue = async (key: string) => await AsyncStorage.getItem(key);

const setAsyncValue = async (key: string, value: string) =>
  await AsyncStorage.setItem(key, value);

const removeByKey = async (key: string) => await AsyncStorage.removeItem(key);

export {getAsyncValue, setAsyncValue, removeByKey};
