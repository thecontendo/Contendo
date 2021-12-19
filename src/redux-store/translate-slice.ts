import {createSlice} from '@reduxjs/toolkit';
import i18n from 'i18n';

export interface LangState {
  language: string;
}

const initialState: LangState = {
  language: '',
};

export const translateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    translation: state => {
      state.language = i18n.locale;
    },
  },
});

// Action creators are generated for each case reducer function
export const {translation} = translateSlice.actions;

export default translateSlice.reducer;
