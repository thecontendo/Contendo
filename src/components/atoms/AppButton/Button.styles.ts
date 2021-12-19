import {StyleSheet} from 'react-native';

import {Colors} from 'styles';

const Primary = StyleSheet.create({
  default: {
    backgroundColor: Colors.GREEN,
  },
});

const Secondary = StyleSheet.create({
  default: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREEN,
    borderWidth: 2.5,
  },
});

export default {Primary, Secondary};
