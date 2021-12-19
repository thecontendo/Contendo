import React from 'react';
import RootNavigator from 'navigation';
import DevPersistedNavigationContainer from 'navigation/DevPersistedNavigationContainer';
import {Colors} from 'styles';
import {StatusBar} from 'react-native';
import {store} from 'redux-store/store';
import {Provider} from 'react-redux';
// import '../config/reactotron';

const App = () => {
  return (
    <Provider store={store}>
      <DevPersistedNavigationContainer persistKey="navigationState">
        <RootNavigator />
      </DevPersistedNavigationContainer>
      <StatusBar backgroundColor={Colors.GRAY_DEEP} barStyle="dark-content" />
    </Provider>
  );
};

export default App;

/*import messaging from '@react-native-firebase/messaging';
const getFcmToken = async () =>  {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log(fcmToken);
    console.log('Your Firebase Token is:', fcmToken);
  } else {
    console.log('Failed', 'No token received');
  }
};
const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    await getFcmToken(); //<---- Add this
    console.log('Authorization status:', authStatus);
  }
};*/
