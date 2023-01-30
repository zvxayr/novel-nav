import React from 'react';

import { AppBar } from './components/AppBar';
import { MainArea } from './components/MainArea';
import { StatusBar } from './components/StatusBar';
import { ToolBar } from './components/ToolBar';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
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
