import { configureStore } from '@reduxjs/toolkit';

import windowState from '../features/events/windowStateSlice';

const store = configureStore({
    reducer: {
        windowState,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
