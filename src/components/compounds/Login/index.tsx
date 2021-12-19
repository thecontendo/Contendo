import * as React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Logos from 'components/atoms/Logo';
import styles from './styles';
import SocialAuthButton from 'components/atoms/SocialAuthButton';
import GoogleIcon from 'assets/svgs/google.svg';
import FBIcon from 'assets/svgs/facebook.svg';
import {useDispatch} from 'react-redux';
import {login, googleLogin} from 'services/auth-service';
import {ICredentials} from 'interfaces/IService';
// @ts-ignore
import Bg from 'assets/images/IMG_8332.jpg';
// @ts-ignore
import lBg from 'assets/images/bg2.jpg';
import Config from 'react-native-config';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState<string>('pac');
  const [password, setPassword] = React.useState<string>('');
  const navigation = useNavigation();

  const makeCall = React.useCallback(() => {
    const credentials = {
      username: username,
      password: password,
    } as ICredentials;

    dispatch(login(credentials));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeGoogleCall = React.useCallback((passwordy: string) => {
    googleLogin(passwordy, dispatch).then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <ImageBackground source={Bg} resizeMode="cover" style={styles.imgBg} />
      <View style={styles.loginContainer}>
        <ImageBackground
          source={lBg}
          resizeMode="cover"
          style={styles.container}>
          <View style={styles.empty} />
          <Logos />
          <View style={styles.gap} />
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email.."
              placeholderTextColor="#feffff"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.gap} />
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.passText}
              placeholder="Password..."
              placeholderTextColor="#feffff"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={makeCall}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.authContainer}>
            <SocialAuthButton
              style={styles.google}
              onPress={() => {
                GoogleSignin.configure({
                  webClientId: Config.GOOGLE_KEY,
                  offlineAccess: true,
                });
                makeGoogleCall(password);
              }}>
              <GoogleIcon />
            </SocialAuthButton>

            <SocialAuthButton style={styles.facebook} onPress={() => {}}>
              <FBIcon />
            </SocialAuthButton>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen' as never)}>
            <Text style={styles.forgot}>Signup </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
