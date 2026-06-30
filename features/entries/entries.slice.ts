import { createSlice } from '@reduxjs/toolkit';
import EntriesState from '@/types/entries-state.interface';
import { fetchEntries } from './entries.thunks';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [],
    loading: false,
    error: undefined,
  } as EntriesState,
  reducers: {
    createEntry(state, action) {
      state.entries.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntries.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchEntries.fulfilled, (state, action) => {
        state.loading = false;
        state.entries = action.payload;
      })
      .addCase(fetchEntries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default entriesSlice;
