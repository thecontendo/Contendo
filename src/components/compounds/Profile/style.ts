import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  scrollView: {},
  container2: {
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
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengeBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
  },
  menuWrapper: {
    marginTop: 3,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor: '#dddddd',
    // borderTopColor: '#7b6e6e',
    borderBottomWidth: 1,
    // borderTopWidth: 1,
  },
  logout: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#6e6e6e',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: (windowWidth * 80) / 100,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  logoutContainer: {
    alignItems: 'center',
  },
  logoutText: {
    color: 'whitesmoke',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  avatar: {flexDirection: 'row', marginTop: 15},
  titleAvatar: {marginLeft: 20},
  titleAvatars: {marginTop: 15, marginBottom: 5},
  logoutTitle: {
    alignItems: 'center',
  },
});

export default styles;
