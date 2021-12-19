import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from 'react-native-screens/native-stack';
import HomeScreen from 'screens/HomeScreen';
import CreateChallengeScreen from 'screens/CreateChallengeScreen';
// import {enableScreens} from 'react-native-screens';
// enableScreens();

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  stackPresentation: 'modal',
  headerShown: false,
};

const MainStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={DEFAULT_SCREEN_OPTIONS}
      initialRouteName={'HomeScreen'}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen
        name="CreateChallengeScreen"
        component={CreateChallengeScreen}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
