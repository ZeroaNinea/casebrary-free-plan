import { createAsyncThunk } from '@reduxjs/toolkit';
import EntryRepository from './entry.repository';

const repository = new EntryRepository();

export const fetchEntries = createAsyncThunk(
  'entries/fetchEntries',
  async () => {
    const entries = await repository.getAllEntries();
    return entries;
  },
);
