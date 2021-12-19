import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SOFT_PURPLE,
  },
  icon: {
    width: Mixins.scaleSize(15),
    height: Mixins.scaleSize(15),
  },
});

export default styles;
