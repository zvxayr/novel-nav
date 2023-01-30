import React, { useEffect } from 'react';

import { setFullScreen, setMaximized } from '../features/events/windowStateSlice';
import { AppBar } from './components/AppBar';
import { MainArea } from './components/MainArea';
import { StatusBar } from './components/StatusBar';
import { ToolBar } from './components/ToolBar';
import { useAppDispatch } from './hooks';
import { AppDispatch } from './store';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
    const dispatch = useAppDispatch();
    useEffect(attachListeners(dispatch), []);

    return (
        <>
            <GlobalStyle />
            <AppBar />
            <ToolBar />
            <MainArea />
            <StatusBar />
        </>
    );
};

const attachListeners = (dispatch: AppDispatch) => () => {
    electron.events.onMaximizeChange((isMaximized) => {
        dispatch(setMaximized(isMaximized));
    });

    electron.events.onFullScreenChange((isFullScreen) => {
        dispatch(setFullScreen(isFullScreen));
    });
};
