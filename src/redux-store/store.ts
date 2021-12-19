import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import loadingSlice from './loading-slice';
import authReducer from './auth-slice';
import translateReducer from './translate-slice';

const reducer = combineReducers({
  auth: authReducer,
  translate: translateReducer,
  loading: loadingSlice,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
