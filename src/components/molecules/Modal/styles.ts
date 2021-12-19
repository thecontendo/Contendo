import {StyleSheet} from 'react-native';

import {Colors, Mixins} from '../../../styles';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MODAL_BACKGROUND,
  },
  modalContainer: {
    padding: Mixins.scaleSize(16),
    margin: Mixins.scaleSize(20),
    backgroundColor: Colors.WHITE,
    borderRadius: Mixins.scaleSize(20),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: Mixins.scaleSize(0),
      height: Mixins.scaleSize(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: Mixins.scaleSize(50),
    marginBottom: Mixins.scaleSize(40),
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    marginBottom: Mixins.scaleSize(20),
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  buttonsContainer: {
    marginTop: Mixins.scaleSize(20),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    width: Mixins.scaleSize(250),
    height: Mixins.scaleSize(50),
  },
  negativeButton: {
    marginRight: 4,
  },
  scrollViewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  contentScrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
