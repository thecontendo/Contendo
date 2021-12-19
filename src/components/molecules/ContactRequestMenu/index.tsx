import * as React from 'react';
import {View, Button, Text, Dimensions} from 'react-native';
import styles from './styles';
import {Input} from 'react-native-elements';
import {sendEmailRequest} from 'services/contact-service';
import {ContactType} from 'enums/ContactType';
import QRCode from 'react-native-qrcode-svg';
import AppButton from 'components/atoms/Button';
// @ts-ignore
import Logo from 'assets/images/whitelogo.png';
const windowWidth = Dimensions.get('window').width;

interface IRequestProps {
  setContactType(flag: boolean): void;
  senderType: ContactType;
}
export default function ContactRequestMenu(props: IRequestProps) {
  const {setContactType, senderType} = props;
  const [emailInput, setEmailInput] = React.useState('');

  const emailTemplate = (
    <View>
      <Input
        placeholder={'Insert email here...'}
        onChangeText={setEmailInput}
        value={emailInput}
      />
      <Button
        title={'Send'}
        onPress={() => {
          sendEmailRequest(emailInput)
            .then(e => {
              console.log(e);
              setContactType(false);
            })
            .catch(e => {
              console.log(e);
              setContactType(false);
            });
        }}
      />
    </View>
  );

  const linkTemplate = (
    <View>
      <Text>https://localhost:5005/lbfeyuvbeveuvwybvfeuwvb433r43r43</Text>
      <Button title={'Copy To Clipboard'} onPress={() => {}} />
      <Button title={'Share'} onPress={() => {}} />
    </View>
  );

  const codeTemplate = (
    <View style={styles.qrContainer}>
      <QRCode
        logo={Logo}
        size={(windowWidth * 40) / 100}
        value="http://165.227.170.14:5001/"
      />
    </View>
  );

  return (
    <View style={styles.listWidth}>
      {senderType === ContactType.email ? emailTemplate : null}
      {senderType === ContactType.qr ? codeTemplate : null}
      {senderType === ContactType.link ? linkTemplate : null}

      <View style={styles.elementTopMargin}>
        <AppButton
          title={'Ok '}
          onPress={() => {
            setContactType(false);
          }}
        />
      </View>
    </View>
  );
}
