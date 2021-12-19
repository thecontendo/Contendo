import * as React from 'react';
import {Text, View} from 'react-native';
import styles from 'components/compounds/Active/style';

interface IChallenge {
  person: string;
  text: string;
  icon: any;
  name: string;
  position: number;
}

export default function ActiveChallenges() {
  const [challenges] = React.useState<Array<IChallenge>>([]);
  const [message] = React.useState<IChallenge>({
    person: '',
    text: '20 x Pushups',
    icon: [],
    name: 'pushups',
    position: 1,
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {/* <Image style={styles.workoutImage} source={message.icon} />*/}
        <View style={styles.workoutDescription}>
          <Text
            style={
              styles.challengeText
            }>{`New Challenge from ${message.person}`}</Text>
          <Text style={styles.challengeText}>{message.text}</Text>
        </View>
      </View>
      {/*<FloatingAction
        position={'right'}
        shadow={{
          shadowColor: '#070404',
        }}
        actions={actions}
        onPressItem={name => {
          switch (name) {
            case 'bt_createChallenge':
              navigation.navigate('CreateChallengeScreen');
              break;
            case 'pushups':
              break;
            case 'burpees':
              break;
            case 'jumpingjacks':
              break;
          }
        }}
      />*/}
      {challenges.map((e, i) => (
        <Text key={i + 1}>{e.name}</Text>
      ))}
    </View>
  );
}
