import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { curentUser } from './sliceAdmin';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const tokenPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['admin'],
};

const rootReduser = combineReducers({
    admin: curentUser.reducer,
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);

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
