import { createSlice } from '@reduxjs/toolkit';

export const windowStateSlice = createSlice({
    name: 'windowState',
    initialState: {
        isFullScreen: false,
        isMaximized: false,
    },
    reducers: {
        setFullScreen: (state, action: Action<boolean>) => {
            state.isFullScreen = action.payload;
        },
        setMaximized: (state, action: Action<boolean>) => {
            state.isMaximized = action.payload;
        },
    },
});

export const { setFullScreen, setMaximized } = windowStateSlice.actions;
export default windowStateSlice.reducer;
