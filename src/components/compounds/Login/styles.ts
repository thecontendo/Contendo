import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const flBlue = '#629898';
const wSmoke = 'whitesmoke';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#414e4e',
    borderRadius: 22,
    alignItems: 'center',
    alignContent: 'center',
    width: (windowWidth * 95) / 100,
    height: (windowHeight * 80) / 100,
    marginTop: -90,
  },
  loginContainer: {
    alignContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    backgroundColor: '#3c4242',
  },
  empty: {
    backgroundColor: '#3c4242',
    alignItems: 'center',
    marginTop: 5,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 80,
    alignContent: 'center',
  },
  inputView: {
    width: '80%',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
  },
  forgotPass: {
    marginBottom: 20,
  },
  forgot: {
    color: flBlue,
    fontSize: 11,
  },
  signUpBox: {
    textAlign: 'right',
  },
  signUp: {
    color: flBlue,
    fontSize: 15,
  },
  inputText: {
    color: wSmoke,
    height: 50,
    borderColor: flBlue,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    padding: 12,
  },
  passText: {
    color: wSmoke,
    height: 50,
    borderColor: flBlue,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 12,
  },
  loginBtn: {
    width: '70%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: flBlue,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
    alignContent: 'center',
  },
  loginText: {
    color: 'white',
  },
  google: {
    backgroundColor: '#DB4437',
    borderRadius: 14,
    marginRight: 2,
  },
  facebook: {
    backgroundColor: '#4469B0',
    borderRadius: 14,
    marginLeft: 2,
  },
  authContainer: {
    flexDirection: 'row',
    width: (windowWidth * 50) / 100,
    height: 40,
    marginBottom: 40,
    alignContent: 'center',
  },
  gap: {
    height: 10,
  },
  imgBg: {
    height: (windowWidth * 50) / 100,
    backgroundColor: '#3c4242',
  },
});

export default styles;
