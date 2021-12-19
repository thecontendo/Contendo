import {StyleSheet} from 'react-native';

import {scaleSize} from '../../../styles/mixins';
import {Colors} from '../../../styles';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: scaleSize(30),
    backgroundColor: Colors.WHITE,
    paddingBottom: scaleSize(24),
  },
  contentContainer: {
    paddingTop: scaleSize(42),
    position: 'relative',
  },
});

export default style;
