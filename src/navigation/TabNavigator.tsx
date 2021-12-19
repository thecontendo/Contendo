import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Challenge from 'assets/svgs/challenge_1.svg';
import ProfilePik from 'assets/svgs/profile_1.svg';
import ContactsPik from 'assets/svgs/icons8-contacts.svg';
import ChallengeScreen from 'components/compounds/Challenge';
import Profile from 'components/compounds/Profile';
import Contacts from 'components/compounds/Contacts';
import {TouchableOpacity} from 'react-native';
import styles from './style';

const BottomStack = createBottomTabNavigator();

// @ts-ignore
const BottomNavigator = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'ChallengeScreen'}>
      <BottomStack.Screen
        name="ChallengeScreen"
        component={ChallengeScreen}
        options={{
          tabBarLabel: 'Contend',
          tabBarIcon: () => <Challenge />,
        }}
      />
      <BottomStack.Screen
        name="NotificationScreen"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <ProfilePik />,
        }}
      />
      <BottomStack.Screen
        name="ContactScreen"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: () => <ContactsPik />,
          headerTransparent: true,
          headerTitle: 'Friends',
          headerLeft: () => <TouchableOpacity style={styles.backButton} />,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;
