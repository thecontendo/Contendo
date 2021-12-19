import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

type Props = {
  props: object;
  onPress(): string;
  disabled: boolean;
};

export const NativeButton = (props: Props) => {
  const Button = Platform.select({
    ios: () => TouchableOpacity,
    // @ts-ignore
    android: () => TouchableNativeFeedback,
  })();

  return <Button {...props} />;
};
