import React from 'react';
import {View} from 'react-native';

import {NativeButton} from '../NativeButton';
import styles from './styles';

export const BUTTON_TYPE = {
  primary: styles.primaryButton,
  transparentBlack: styles.transparentBlackButton,
};

export const DISABLED_BUTTON = {
  primary: styles.primaryDisabled,
  transparentBlack: {},
};

type Props = {
  onPress(): void;
  style?: object;
  type?: 'primary' | 'transparentBlack';
  children: React.ReactNode;
  disabled: boolean;
};

export function BaseButton({
  onPress,
  style,
  type,
  children,
  disabled,
  ...props
}: Props) {
  const buttonStyles = [
    styles.button,
    type && BUTTON_TYPE[type],
    disabled && type && DISABLED_BUTTON[type],
    style,
  ];
  return (
    // @ts-ignore
    <NativeButton onPress={onPress} disabled={disabled} {...props}>
      <View style={buttonStyles}>{children}</View>
    </NativeButton>
  );
}

BaseButton.defaultProps = {
  onPress: () => {},
  style: undefined,
  type: 'transparent',
  disabled: false,
};
