import React from 'react';
import {Text} from 'react-native';

import {Mixins} from '../../../styles';

import styles from './styles';

type Props = {
  style?: object;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  isBold?: boolean;
  isSemiBold?: boolean;
  isUppercase?: boolean;
  children?: any;
  fontWeight?: string;
  letterSpacing?: number;
};

export const BaseText = ({
  style,
  fontSize,
  color,
  lineHeight,
  isBold,
  isSemiBold,
  isUppercase,
  children,
  fontWeight,
  letterSpacing,
  ...props
}: Props) => {
  const chunkedStyles = [
    styles.text,
    fontSize && {fontSize: Mixins.scaleFont(fontSize)},
    lineHeight && {lineHeight: Mixins.scaleFont(lineHeight)},
    fontWeight && {fontWeight},
    letterSpacing && {letterSpacing},
    {color},
    isBold && styles.textBold,
    isSemiBold && styles.textSemiBold,
    isUppercase && styles.textUpper,
    style,
    {...props},
  ];
  // @ts-ignore
  return <Text style={chunkedStyles}>{children}</Text>;
};
