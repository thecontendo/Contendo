import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.SOFT_PURPLE,
    color: Colors.WHITE,
    height: Mixins.scaleSize(48),
    width: Mixins.scaleSize(328),
  },
  transparentBlackButton: {
    backgroundColor: Colors.TRANSPARENT,
    color: Colors.GRAY_DARKER_GUNPOWDER,
    height: Mixins.scaleSize(48),
    width: Mixins.scaleSize(328),
  },
  primaryDisabled: {
    backgroundColor: Colors.GRAY_URANIUM,
    color: Colors.WHITE,
    height: Mixins.scaleSize(48),
    width: Mixins.scaleSize(328),
  },
  transparent: {},
});

export default styles;
