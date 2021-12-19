import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../styles';

const styles = StyleSheet.create({
  helperText: {
    color: Colors.GRAY_URANIUM,
    marginTop: Mixins.scaleSize(4),
  },
  textError: {
    alignSelf: 'flex-start',
    color: Colors.RED_INPUT_ERROR,
  },
});

export default styles;
