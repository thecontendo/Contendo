import React, {useEffect} from 'react';
import AuthNavigator from 'navigation/AuthNavigator';
import AppNavigator from './AppNavigator';
import {RootState} from 'redux-store/store';
import {useDispatch, useSelector} from 'react-redux';
import {getToken, setAuthDetails} from 'redux-store/auth-slice';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    getToken().then(result => {
      dispatch(
        setAuthDetails({
          token: result,
        }),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prepareScreen = () => {
    /* console.log('prepareScreen');
    console.log(token);*/
    if (token && token !== '' && token !== null) {
      return <AppNavigator />;
    } else {
      return <AuthNavigator />;
    }
  };

  return <>{prepareScreen()}</>;
};

export default RootNavigator;
