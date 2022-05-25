import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../features/ticket/ticketSlice';
import fundraiserReducer from '../features/fundraiser/fundraiserSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    fundraiser: fundraiserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;