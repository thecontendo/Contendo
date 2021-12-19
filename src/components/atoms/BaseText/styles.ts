import {StyleSheet} from 'react-native';

import {Typography} from '../../../styles';

const styles = StyleSheet.create({
  // @ts-ignore
  text: {
    ...Typography.FONT_POPPINS_REGULAR,
  },
  // @ts-ignore
  textBold: {
    ...Typography.FONT_POPPINS_BOLD,
  },
  // @ts-ignore
  textSemiBold: {
    ...Typography.FONT_POPPINS_SEMI_BOLD,
  },
  textUpper: {
    textTransform: 'uppercase',
  },
});

export default styles;
