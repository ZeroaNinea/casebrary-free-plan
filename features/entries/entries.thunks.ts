import { createAsyncThunk } from '@reduxjs/toolkit';
import EntryRepository from './entry.repository';

const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  const entryRepository = new EntryRepository();
  const entries = await entryRepository.getAllEntries();
  return entries;
});

export default fetchEntries;
