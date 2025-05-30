import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  1: [1, 2, 3],
  2: [],
  3: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    moveItem: (state, action) => {
      const { from, to } = action.payload;
      
      const sourceItems = state[from];
      const targetItems = state[to];
      
      if (sourceItems.length === 0) return;
      
      const topSourceDisk = sourceItems[0];
            if (targetItems.length > 0 && targetItems[0] < topSourceDisk) return;
      
      state[from] = sourceItems.slice(1);
      state[to] = [topSourceDisk, ...targetItems];
    }
  },
  selectors: {
    getItems: (state) => state,
  },
});

export const { moveItem } = itemsSlice.actions;
