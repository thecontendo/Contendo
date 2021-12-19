import {StyleSheet} from 'react-native';
import {Colors} from 'styles';

const styles = StyleSheet.create({
  qrImage: {
    height: 40,
    width: 40,
  },
  listWidth: {
    width: '100%',
  },
  imageSize: {
    height: 40,
    width: 40,
  },
  elementTopMargin: {
    marginTop: 4,
  },
  listContent: {alignItems: 'center'},
  qrContainer: {
    alignItems: 'center',
    marginBottom: 9,
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 36,
    backgroundColor: Colors.GRAY_90,
    width: '100%',
    height: 20,
  },
});

export default styles;
