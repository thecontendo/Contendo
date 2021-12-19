import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../styles';

const styles = StyleSheet.create({
  iconStyle: {marginRight: Mixins.scaleSize(10)},
  primary: {
    color: Colors.WHITE,
  },
  transparentBlack: {
    color: Colors.GRAY_DARKER_GUNPOWDER,
  },
  textUpper: {
    textTransform: 'uppercase',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textDisabled: {
    opacity: 0.4,
  },
});

export default styles;
