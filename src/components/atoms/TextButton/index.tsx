import React from 'react';
import {View} from 'react-native';

import {BaseText} from '../BaseText';
import {BaseButton} from '../BaseButton';
import {LoadingButton} from '../LoadingButton';

import styles from './styles';

const TEXT_COLOR = {
  primary: styles.primary,
  transparentBlack: styles.transparentBlack,
};

type Props = {
  onPress(): void;
  style?: object;
  textStyle?: object;
  type?: 'primary' | 'transparentBlack';
  isBold?: boolean;
  isSemiBold?: boolean;
  fontSize?: number;
  lineHeight?: number;
  isUppercase?: boolean;
  isUnderline?: boolean;
  text: string;
  icon?: object;
  isDisabled?: boolean;
  isLoading?: boolean;
  isLoadingStyle?: object;
};

export const TextButton = ({
  onPress,
  style,
  textStyle,
  type,
  isBold,
  isSemiBold,
  fontSize,
  lineHeight,
  isUppercase,
  isUnderline,
  text,
  icon,
  isDisabled,
  isLoading,
  isLoadingStyle,
  ...props
}: Props) => {
  const textStyles = [
    type && TEXT_COLOR[type],
    isUppercase && styles.textUpper,
    isUnderline && styles.textUnderline,
    isDisabled && type !== 'primary' && styles.textDisabled,
    textStyle,
  ];
  return isLoading ? (
    <LoadingButton type={type} style={[isLoadingStyle, style]} />
  ) : (
    <BaseButton
      style={style}
      type={type}
      onPress={onPress}
      {...props}
      disabled={isDisabled}>
      <View style={styles.iconStyle}>{icon}</View>
      <BaseText
        style={textStyles}
        lineHeight={lineHeight}
        fontSize={fontSize}
        isSemiBold={isSemiBold}
        isBold={isBold}>
        {text}
      </BaseText>
    </BaseButton>
  );
};

TextButton.defaultProps = {
  onPress: () => {},
  style: undefined,
  textStyle: undefined,
  fontSize: undefined,
  lineHeight: undefined,
  type: 'transparent',
  isBold: false,
  isSemiBold: false,
  isUppercase: false,
  isUnderline: false,
  isDisabled: false,
  isLoading: false,
  icon: undefined,
};
