import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6e6e6e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '90%',
    borderRadius: 15,
    marginTop: 15,
  },
  second: {flex: 1, backgroundColor: '#6e6e6e'},
  indicatorStyle: {
    backgroundColor: 'whitesmoke',
    color: 'red',
  },
  tabTitle: {
    color: '#6e6e6e',
  },
});

export default styles;
