import { createSlice } from '@reduxjs/toolkit';
import Entry from '@/types/entry.interface';
import fetchEntries from './entries.thunks';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: [] as Entry[],
  reducers: {
    createEntry(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default entriesSlice;
