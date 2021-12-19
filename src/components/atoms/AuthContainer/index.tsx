import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {KeyboardShift} from '../KeyboardShift';

import styles from './styles';

type Props = {
  children: React.ReactNode;
  style?: object;
  styleContext?: object;
  contentContainerStyle?: object;
};

export const AuthContainer = ({
  children,
  style,
  styleContext,
  contentContainerStyle,
}: Props) => (
  // <KeyboardShift>
  <SafeAreaView style={[styles.container, style]}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.contentContainer, styleContext]}>{children}</View>
    </ScrollView>
  </SafeAreaView>
  // </KeyboardShift>
);
