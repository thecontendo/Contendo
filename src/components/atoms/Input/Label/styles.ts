import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    opacity: 0.87,
    marginTop: Mixins.scaleSize(15),
    marginBottom: Mixins.scaleSize(6),
  },
  textFocused: {
    color: Colors.SOFT_PURPLE,
  },
  textError: {
    color: Colors.RED_INPUT_ERROR,
  },
  textDisabled: {
    opacity: 0.4,
  },
});

export default styles;
