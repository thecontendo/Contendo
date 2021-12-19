import React from 'react';

import {BaseText} from '../BaseText';
import {Typography} from '../../../styles';

import styles from './styles';

type Props = {
  hasError?: boolean;
  children: any;
  style?: object;
};

export const HelperText = ({style, hasError, children}: Props) => {
  return (
    <BaseText
      fontSize={Typography.FONT_SIZE_12}
      lineHeight={Typography.LINE_HEIGHT_16}
      style={[styles.helperText, hasError && styles.textError, style]}>
      {children}
    </BaseText>
  );
};
