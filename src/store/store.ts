import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type Nullable<T> = T | null;
