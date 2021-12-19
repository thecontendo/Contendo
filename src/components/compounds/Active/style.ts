import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
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
  floating: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  workoutImage: {
    width: 80,
    height: 80,
  },
  workoutDescription: {
    // marginLeft: 15,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    borderRadius: 15,
  },
  challengeText: {
    color: 'whitesmoke',
  },
});

export default styles;
