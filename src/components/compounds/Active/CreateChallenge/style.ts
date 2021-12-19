import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  container: {
    backgroundColor: '#a9b4b7',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '90%',
    borderRadius: 15,
    marginTop: 15,
  },
  floating: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
