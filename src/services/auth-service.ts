import api from 'app-interface/api-manager';
import {AuthState, setAuthDetails} from 'redux-store/auth-slice';
import {ICredentials} from 'interfaces/IService';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const login =
  (data: ICredentials) =>
  async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    try {
      let response = await api.post('/InternalAuth/Token', {
        username: data.username,
        password: data.password,
      });

      let prepareData = response.data as unknown as AuthState;
      let result = {
        token: prepareData.token,
      };
      dispatch(setAuthDetails(result));
    } catch (e) {
      return console.error(e.message);
    }
  };

const googleLogin = async (password: string, dispatch: any) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    //If login is successful you'll get user info object in userInfo below I'm just printing it to console. You can store this object in a usestate or use it as you like user is logged in.
    const credentials = {
      username: userInfo.user.email,
      password: password,
    } as ICredentials;
    dispatch(login(credentials));
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('You cancelled the sign in.');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Google sign In operation is in process');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play Services not available');
    } else {
      console.log(
        'Something unknown went wrong with Google sign in. ' + error.message,
      );
    }
  }
};

export {login, googleLogin};
