import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IInitialState = {
  counter: number;
};

const initialState: IInitialState = {
  counter: 0,
};

export const basketSlice = createSlice({
  initialState,
  name: 'basket',
  reducers: {
    inc: (state, { payload }: PayloadAction<number>) => {
      state.counter += 1;
    },
  },
});
export const { inc } = basketSlice.actions;

export default basketSlice.reducer;
