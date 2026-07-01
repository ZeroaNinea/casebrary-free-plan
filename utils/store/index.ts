import { configureStore } from '@reduxjs/toolkit';
import entriesSlice from '@/features/entries/entries.slice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    entries: entriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
