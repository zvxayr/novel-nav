import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../hooks';
import { DarkModeToggle } from './DarkMode';

export const AppBar = () => {
    const isFullScreen = useAppSelector((state) => state.windowState.isFullScreen);
    const isMaximized = useAppSelector((state) => state.windowState.isMaximized);
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
