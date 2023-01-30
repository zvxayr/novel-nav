import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DarkModeToggle } from './DarkMode';

type StateUpdater<S> = React.Dispatch<React.SetStateAction<S>>;
const attachListeners = (setIsMaximized: StateUpdater<boolean>, setIsFullScreen: StateUpdater<boolean>) => () => {
    electron.events.listen('maximize', () => {
        setIsMaximized(true);
    });

    electron.events.listen('unmaximize', () => {
        setIsMaximized(false);
    });

    electron.events.listen('enter-full-screen', () => {
        setIsFullScreen(true);
    });

    electron.events.listen('leave-full-screen', () => {
        setIsFullScreen(false);
    });
};

export const AppBar = () => {
    let [isMaximized, setIsMaximized] = useState(false);
    let [isFullScreen, setIsFullScreen] = useState(false);
    useEffect(attachListeners(setIsMaximized, setIsFullScreen), []);

    const { minimize, toggleMaximize, close } = electron.controls;
    return (
        <MenuBar isHidden={isFullScreen}>
            <Menu>
                <DarkModeToggle />
            </Menu>
            <Title>Title</Title>
            <Control>
                <ControlButton onClick={minimize}>—</ControlButton>
                <ControlButton onClick={toggleMaximize}>{isMaximized ? '▭' : '▢'}</ControlButton>
                <CloseButton onClick={close}>⤫</CloseButton>
            </Control>
        </MenuBar>
    );
};

const ControlButton = styled.button`
    -webkit-app-region: none;
    background-color: var(--color-primary);
    border: none;
    color: var(--color-text);
    height: 32px;
    outline: none;
    width: 48px;

    &:hover {
        background-color: var(--color-secondary);
        color: white;
    }
`;

const CloseButton = styled(ControlButton)`
    &:hover {
        background-color: var(--color-error);
        color: white;
    }
`;

const MenuBar = styled.div<{ isHidden: boolean }>`
    -webkit-app-region: drag;
    user-select: none;
    background: var(--color-primary);
    display: ${({ isHidden }) => (isHidden ? 'none' : 'grid')};
    display: grid;
    grid-area: menu;
    grid-template-areas: 'menu name ctrl';
    grid-template-columns: 1fr min-content 1fr;

    & > * * {
        -webkit-app-region: none;
    }
`;

const Menu = styled.div`
    align-items: center;
    color: var(--color-text);
    display: flex;
    grid-area: menu;
    justify-content: left;
`;

const Title = styled.div`
    align-items: center;
    color: var(--color-text);
    display: flex;
    grid-area: name;
    justify-content: center;
`;

const Control = styled.div`
    align-items: center;
    color: var(--color-text);
    display: flex;
    grid-area: ctrl;
    justify-content: right;
`;
