import {createSlice} from '@reduxjs/toolkit';
import {
  getAsyncValue,
  setAsyncValue,
  removeByKey,
} from 'app-interface/async-storage';

export interface AuthState {
  token: string;
  name: string;
  userId: string;
}

const initialState: AuthState = {
  token: '',
  name: '',
  userId: '',
};

export const getToken = async () => {
  let result = await getAsyncValue('accessToken');
  return result ?? '';
};

const onLogout = async () => {
  await removeByKey('accessToken');
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthDetails: (state, action) => {
      state.token = action.payload.token;
      /*  console.log(`setAuthDetails : payload - `);
      console.log(action.payload);*/
      if (state.token && action.payload.token) {
        setAsyncValue('accessToken', action.payload.token).then(() => {
          // console.log('inserted');
        });
      }
      if (action.payload.userId) {
        // console.log(`setAuthDetails : payload - ${action.payload.userId}`);
        setAsyncValue('userId', action.payload.userId).then(() => {
          // console.log('inserted');
        });
      }
    },
    getAuthDetails: state => {
      getToken().then(value => {
        /* console.log('getAuthDetails :');
        console.log(value);*/
        state.token = value;
      });
    },
    logout: state => {
      state.token = '';
      onLogout();
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuthDetails, getAuthDetails, logout} = authSlice.actions;

export default authSlice.reducer;
