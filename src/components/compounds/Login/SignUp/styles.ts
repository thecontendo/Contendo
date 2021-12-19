import {StyleSheet, Dimensions} from 'react-native';
import {Mixins, Typography, Colors} from 'styles';
import isIOS from '../../../../utils/platform';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3c4242',
    // alignItems: 'center',
    height: windowHeight,
  },
  empty: {
    backgroundColor: '#3c4242',
    alignItems: 'center',
    height: (windowHeight * 30) / 100,
  },
  logo: {
    alignSelf: 'center',
  },
  inputView: {
    width: '80%',
    borderRadius: 25,
    height: 30,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    color: 'white',
    height: 50,
    borderColor: 'gray',
    borderWidth: 3,
    marginBottom: 20,
    borderRadius: 50,
    padding: 12,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '70%',
    // backgroundColor: '#3f8383',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#3f8383',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  loginText: {
    color: 'white',
  },
  google: {
    backgroundColor: '#DB4437',
    marginLeft: 16,
    borderRadius: 50,
  },
  facebook: {
    backgroundColor: '#4469B0',
    marginLeft: 16,
    borderRadius: 50,
  },
  authContainer: {
    flexDirection: 'row',
    width: '50%',
    height: 40,
    marginBottom: 40,
  },
  gap: {
    height: 10,
  },
  //signup-user-info
  formContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_600,
    lineHeight: Typography.LINE_HEIGHT_21,
  },
  checkbox: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Mixins.scaleSize(15),
    marginBottom: Mixins.scaleSize(100),
  },
  socialCheckbox: {
    marginTop: Mixins.scaleSize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: isIOS ? Mixins.scaleSize(2) : Mixins.scaleSize(5),
    marginRight: isIOS ? Mixins.scaleSize(2) : Mixins.scaleSize(5),
  },
  TermsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: isIOS ? Mixins.scaleSize(2) : Mixins.scaleSize(-5),
  },
  termsCheckBoxText: {
    paddingLeft: Mixins.scaleSize(10),
  },
  termsAndConditionsText: {
    textDecorationLine: 'underline',
    marginLeft: Mixins.scaleSize(10),
  },
  footerText: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: Mixins.scaleSize(30),
  },
  socialErrorText: {
    textAlign: 'center',
  },
  errorText: {
    bottom: Mixins.scaleSize(25),
    textAlign: 'center',
  },
  submitContainer: {
    bottom: Mixins.scaleSize(80),
  },
  accountCreatedContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTitle: {
    paddingTop: Mixins.scaleSize(10),
    paddingBottom: Mixins.scaleSize(20),
    alignSelf: 'center',
  },
  successSubTitle: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});

export default styles;
