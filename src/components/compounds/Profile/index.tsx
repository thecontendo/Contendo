import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  RefreshControl,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-elements';
import styles from './style';
import Share from 'react-native-share';
import {getUserInfo} from 'services/user-service';
import {IUserInfo} from 'interfaces/IService';
import {ScrollView} from 'react-native-gesture-handler';
import Challenge from 'assets/svgs/challenge_1.svg';
import ContactsPik from 'assets/svgs/icons8-contacts.svg';
import {logout} from 'redux-store/auth-slice';
import {useDispatch} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    username: '',
    firstName: '',
    lastName: '',
    photo: '',
    email: '',
    title: '',
    description: '',
    status: 1,
  });

  const onGetUserInfo = React.useCallback(() => {
    setRefreshing(true);
    getUserInfo('88922a62-7304-4234-8b91-6a901cfbf779').then(response => {
      if (response?.data) {
        let result = response?.data as IUserInfo;
        setUserInfo({
          username: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          photo: result.photo,
          email: result.email,
          title: result.title,
          description: result.description,
          status: result.status,
        });
        setRefreshing(false);
      }
    });
  }, []);

  useEffect(() => {
    onGetUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      url:
        userInfo.photo ??
        'https://lh3.googleusercontent.com/a-/AOh14Ghp3RZ_pTg4AOXxNwNNscYACiJPr2kw8sF2cBHhAg=s96-c',
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl onRefresh={onGetUserInfo} refreshing={refreshing} />
        }>
        <View style={styles.userInfoSection}>
          <View style={styles.avatar}>
            <Avatar
              rounded
              size={'large'}
              source={{
                uri: 'https://lh3.googleusercontent.com/a-/AOh14Ghp3RZ_pTg4AOXxNwNNscYACiJPr2kw8sF2cBHhAg=s96-c',
              }}
            />
            <View style={styles.titleAvatar}>
              <Text style={[styles.title, styles.titleAvatars]}>
                {userInfo.firstName} {userInfo.lastName}
              </Text>
              <Text style={styles.caption}>
                {userInfo.description ?? 'Caption'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <TouchableOpacity style={styles.challengeBox} onPress={() => {}}>
            <View style={[styles.contactBox]}>
              <Text>20</Text>
              <Challenge />
              <Text>Challenges</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoBox} onPress={() => {}}>
            <View style={styles.infoBox}>
              <Text>12</Text>
              <ContactsPik />
              <Text>Friends</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="edit" size={30} color="#900" />
              <Text style={styles.menuItemText}>Edit Info</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="star" size={30} color="#FFD700" />
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="shopping-bag" size={30} color="#24b54b" />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={myCustomShare}>
            <View style={styles.menuItem}>
              <Icon name="share-alt" size={30} color="#2450b5" />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="life-ring" size={30} color="#b52424" />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="cog" size={30} color="#000000" />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutTitle}
            onPress={() => {
              dispatch(logout());
            }}>
            <View style={styles.logout}>
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
