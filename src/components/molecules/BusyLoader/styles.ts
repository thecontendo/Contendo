import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
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
  root: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backdrop: {
    zIndex: 1000000,
    color: '#fff',
  },
});

export default styles;
