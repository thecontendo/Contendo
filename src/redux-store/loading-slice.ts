import {createSlice} from '@reduxjs/toolkit';

export interface LoadState {
  loading: boolean;
}

const initialState: LoadState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loader: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

// Action creators are generated for each case reducer function
export const {loader} = loadingSlice.actions;

export default loadingSlice.reducer;
