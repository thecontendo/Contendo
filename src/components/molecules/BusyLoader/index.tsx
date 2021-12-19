import React from 'react';
import styles from './styles';
import {ActivityIndicator, View} from 'react-native';

/**
 * @component
 * Common
 */
/*const BusyLoader = () => {
  const {promiseInProgress} = usePromiseTracker();
  return promiseInProgress ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <></>
  );
};*/

const BusyLoader = () => {
  return (
    <View style={[styles.root, styles.backdrop]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default BusyLoader;
