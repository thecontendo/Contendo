import {StyleSheet} from 'react-native';

import {Colors} from '../../../styles';

export default StyleSheet.create({
  default: {
    paddingHorizontal: 36,
  },
  black: {
    backgroundColor: Colors.GRAY_90,
  },
  red: {
    backgroundColor: Colors.RED_INPUT_ERROR,
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
});
