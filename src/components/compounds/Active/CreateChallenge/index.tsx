import * as React from 'react';
import {Button, Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';

export default function CreateChallenge() {
  // const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.root}>
      {/*<TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}>
        <Text-old>{'Create Challenge'}</Text-old>
      </TouchableOpacity>*/}
      <Text>{'Create Challenge'}</Text>
      <TextInput
        placeholder={'Insert you name here'}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title={'Select Workout'} onPress={() => {}} />
      <Button title={'ok'} onPress={() => {}} />
    </View>
  );
}
