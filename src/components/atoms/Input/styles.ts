import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from '../../../styles';

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: Mixins.scaleSize(10),
    justifyContent: 'center',
  },
  input: {
    ...Typography.FONT_POPPINS_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_400,
    lineHeight: Typography.LINE_HEIGHT_24,
    color: Colors.GRAY_DARKER_GUNPOWDER,
    ...Mixins.padding(0, 0, 0, 0),
    textAlignVertical: 'center',
    flex: 1,
    height: Mixins.scaleSize(30),
  },
  inputError: {
    color: Colors.RED_INPUT_ERROR,
  },
  disabled: {
    opacity: 0.4,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Mixins.border(0, 0, 1, 0, Colors.GRAY_DARKER_GUNPOWDER),
  },
  focused: {
    ...Mixins.border(0, 0, 1, 0, Colors.SOFT_PURPLE),
  },
  error: {
    ...Mixins.border(0, 0, 1, 0, Colors.RED_INPUT_ERROR),
  },
  leftIcon: {
    marginRight: Mixins.scaleSize(5),
    marginLeft: Mixins.scaleSize(20),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  rightIcon: {
    marginRight: Mixins.scaleSize(20),
    marginLeft: Mixins.scaleSize(5),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default styles;
