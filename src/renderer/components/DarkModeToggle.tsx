import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = useState<boolean | null>(null);

    const toggleDarkMode = async () => {
        setDarkMode(await electron.darkMode.toggle());
    };

    useEffect(() => {
        const initializeTheme = async () => {
            setDarkMode(await electron.darkMode.value());
        };

        initializeTheme();
    }, []);

    return (
        <TogglerWrapper onClick={toggleDarkMode} isDarkMode={isDarkMode}>
            <div />
            <Circle isDarkMode={isDarkMode} />
            <div />
        </TogglerWrapper>
    );
};

const switchValues =
    (whenNull: string, whenTrue: string, whenFalse: string) =>
    (switchValue: boolean | null): string => {
        switch (switchValue) {
            case true:
                return whenTrue;
            case false:
                return whenFalse;
            default:
                return whenNull;
        }
    };

const TogglerWrapper = styled.div<{ isDarkMode: boolean }>`
    border-radius: 20px;
    display: grid;
    height: 20px;
    width: 40px;
    background-color: ${({ isDarkMode }) => switchValues('#555', '#333', '#CCC')(isDarkMode)};
    grid-template-columns: ${({ isDarkMode }) =>
        switchValues('0.5fr auto 0.5fr', '1fr auto 0fr', '0fr auto 1fr')(isDarkMode)};
    transition: all 0.3s ease-in-out;

    &:hover :nth-child(2) {
        background-color: ${({ isDarkMode }) => switchValues('#888', '#AAA', '#666')(isDarkMode)};
    }
`;

const Circle = styled.div<{ isDarkMode: boolean }>`
    background-color: #888;
    border-radius: 16px;
    height: 16px;
    margin: 2px;
    width: 16px;
`;
