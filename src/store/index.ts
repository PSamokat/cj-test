import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fileManager from 'src/store/file-manager/slice';

const rootReducer = combineReducers({
    fileManager,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
