import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './models/rootReducer';

const persistConfig = {
  key: `tweets-redux`,
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
