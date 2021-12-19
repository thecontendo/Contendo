import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {Colors} from '../../../styles';

type Props = {
  vertical?: boolean;
  color: string;
};

export const Divider = ({vertical, color}: Props) => {
  return (
    <View>
      {vertical ? (
        <LinearGradient
          colors={[Colors.WHITE, color, Colors.WHITE]}
          style={styles.verticalDivider}
        />
      ) : (
        <LinearGradient
          colors={[Colors.WHITE, color, Colors.WHITE]}
          style={styles.divider}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      )}
    </View>
  );
};
