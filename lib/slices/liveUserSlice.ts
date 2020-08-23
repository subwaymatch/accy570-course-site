import { createSlice } from '@reduxjs/toolkit';

const initialState: { userName: string } = { userName: '' };

const liveUserSlice = createSlice({
  name: 'liveUser',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      const userName = action.payload;

      state.userName = userName;
    },
  },
});

export const selectUser = (state) => state.liveUser;

export const { updateUserName } = liveUserSlice.actions;

export default liveUserSlice.reducer;
