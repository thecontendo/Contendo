import * as React from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import styles from './style';
import {useCallback, useEffect} from 'react';
import {IUserInfo} from 'interfaces/IService';
import {deleteContact, getContacts} from 'services/contact-service';
import {Avatar, Button, ListItem} from 'react-native-elements';
import {FloatingAction} from 'react-native-floating-action';
import Dialog from 'components/molecules/Dialog';
import ContactRequestMenu from 'components/molecules/ContactRequestMenu';
import {ContactType} from 'enums/ContactType';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';

const image =
  'https://lh3.googleusercontent.com/a-/AOh14Ghp3RZ_pTg4AOXxNwNNscYACiJPr2kw8sF2cBHhAg=s96-c';

const fltBtnColor = 'rgb(65,78,78)';
const fltTxtBgColor = 'rgb(65,78,78)';
const fltTxtColor = '#fff';

const actions = [
  {
    text: 'Email',
    name: ContactType.email,
    icon: require('assets/images/email.png'),
    textColor: fltTxtColor,
    color: fltBtnColor,
    textBackground: fltTxtBgColor,
    position: 1,
  },
  {
    text: 'Qr Code',
    name: ContactType.qr,
    icon: require('assets/images/qr-code.png'),
    textColor: fltTxtColor,
    color: fltBtnColor,
    textBackground: fltTxtBgColor,
    position: 2,
  },
  {
    text: 'Generate Link',
    name: ContactType.link,
    icon: require('assets/images/icon-link.png'),
    textColor: fltTxtColor,
    color: fltBtnColor,
    textBackground: fltTxtBgColor,
    position: 3,
  },
];

export default function Contacts() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [contactType, setContactType] = React.useState(false);
  const [contacts, setContacts] = React.useState([
    {
      username: '',
      firstName: '',
      lastName: '',
      photo: image,
      email: '',
      title: '',
      description: '',
      status: 1,
      id: '',
    },
  ]);
  const [senderType, setSenderType] = React.useState(ContactType.email);

  const onGetContacts = React.useCallback(() => {
    setRefreshing(true);
    getContacts().then(response => {
      if (response?.data) {
        let result = response?.data as IUserInfo[];
        setContacts(
          result.map(item => {
            return {
              username: item.email,
              firstName: item.firstName,
              lastName: item.lastName,
              photo: item.photo,
              email: item.email,
              title: item.title,
              description: item.description,
              status: item.status,
              id: item.id,
            };
          }),
        );
        setRefreshing(false);
      }
    });
  }, []);

  const onDeleteContact = useCallback(id => {
    console.log(id);
    deleteContact(id)
      .then(response => {
        if (response) {
          onGetContacts();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    onGetContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeRow = (
    rowMap: {[x: string]: {closeRow: () => void}},
    rowKey: string | number,
  ) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  // @ts-ignore
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      refreshControl={
        <RefreshControl onRefresh={onGetContacts} refreshing={refreshing} />
      }>
      <View style={styles.toolBox}>
        <Dialog
          open={contactType}
          close={() => {
            setContactType(false);
          }}>
          <ContactRequestMenu
            senderType={senderType}
            setContactType={flag => setContactType(flag)}
          />
        </Dialog>
      </View>
      <View style={styles.contactList}>
        <SwipeListView
          data={contacts}
          renderItem={(data, rowMap) => {
            let l = data.item;
            return (
              <View>
                <ListItem bottomDivider>
                  <Avatar source={{uri: l.photo ?? image}} />
                  <ListItem.Content>
                    <ListItem.Title>
                      {l.firstName} {l.lastName}
                    </ListItem.Title>
                    <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </View>
            );
          }}
          renderHiddenItem={(data, rowMap) => (
            <View>
              <Button
                title=""
                icon={<Icon name="child" size={25} color="white" />}
                buttonStyle={{minHeight: '100%'}}
              />
              <Button
                title="Delete"
                onPress={() => {
                  //onDeleteContact(l.id);
                  // row.c
                }}
                icon={{name: 'delete', color: 'white'}}
                buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
              />
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          leftActivationValue={75}
          rightActivationValue={-75}
          leftActionValue={0}
          rightActionValue={-75}
        />
      </View>
      <FloatingAction
        color={fltBtnColor}
        showBackground={true}
        position={'right'}
        shadow={{
          shadowColor: '#070404',
        }}
        actions={actions}
        onPressItem={name => {
          if (name === ContactType.email) {
            setSenderType(name);
          } else if (name === ContactType.qr) {
            setSenderType(name);
          } else if (name === ContactType.link) {
            setSenderType(name);
          }
          setContactType(true);
        }}
      />
    </ScrollView>
  );
}
