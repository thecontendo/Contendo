import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {},
  container: {
    backgroundColor: '#95acb4',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight * 40) / 100,
    width: '90%',
    borderRadius: 15,
    marginTop: 15,
  },
  userInfo: {
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
    marginLeft: 15,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#95acb4',
    marginTop: 40,
  },
  contactList: {
    marginTop: 60,
  },
  toolBox: {
    flexDirection: 'row',
    marginTop: 10,
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
});

export default styles;
