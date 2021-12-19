import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {BaseButton} from '../BaseButton';
import {Colors} from '../../../styles';

import styles from './styles';

const INDICATOR_COLOR = {
  primary: Colors.WHITE,
  transparent: Colors.SOFT_PURPLE,
};

type Props = {
  style?: object;
  type?: 'primary' | 'transparentBlack';
  indicatorType?: 'primary' | 'transparent';
};

export const LoadingButton = ({style, type, indicatorType}: Props) => (
  <View style={styles.container}>
    <BaseButton style={style} type={type} disabled>
      <ActivityIndicator color={INDICATOR_COLOR[indicatorType ?? 'primary']} />
    </BaseButton>
  </View>
);

LoadingButton.defaultProps = {
  type: 'primary',
  style: undefined,
};
