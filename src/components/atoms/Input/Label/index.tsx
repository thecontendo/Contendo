import React from 'react';
import {View} from 'react-native';
import {BaseText} from '../../BaseText';

import {Colors, Typography} from '../../../../styles';
import styles from './styles';

type Props = {
  children: any;
  isFocused?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
};

export const Label = ({children, isFocused, hasError, isDisabled}: Props) => (
  <View style={styles.container}>
    <BaseText
      style={[
        isFocused && styles.textFocused,
        hasError && styles.textError,
        isDisabled && styles.textDisabled,
      ]}
      fontSize={Typography.FONT_SIZE_12}
      lineHeight={Typography.LINE_HEIGHT_18}
      color={Colors.GRAY_DARKER_GUNPOWDER}>
      {children}
    </BaseText>
  </View>
);
