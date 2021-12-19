import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from 'react-native-screens/native-stack';

import LoginScreen from 'screens/LoginScreen';
import SignUpScreen from 'screens/SignUpScreen';

// import {enableScreens} from 'react-native-screens';
// enableScreens();

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  stackPresentation: 'modal',
  headerShown: false,
};

const MainStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={DEFAULT_SCREEN_OPTIONS}
      initialRouteName={'LoginScreen'}>
      <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </MainStack.Navigator>
  );
};

export default AuthNavigator;
