import {StyleSheet} from 'react-native';
import {Mixins} from '../../../styles';

const styles = StyleSheet.create({
  divider: {
    height: Mixins.scaleSize(1),
    width: '100%',
  },
  verticalDivider: {
    width: Mixins.scaleSize(1),
    height: '100%',
  },
});

export default styles;
