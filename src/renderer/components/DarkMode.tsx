import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { pickProp, switchValues } from '../../utils';

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

const TogglerWrapper = styled.div<{ isDarkMode: boolean }>`
    border-radius: 20px;
    display: grid;
    height: 20px;
    width: 40px;
    background-color: ${pickProp('isDarkMode', switchValues('#333', '#CCC', '#555'))};
    grid-template-columns: ${pickProp('isDarkMode', switchValues('1fr auto 0fr', '0fr auto 1fr', '0.5fr auto 0.5fr'))};
    transition: all 0.3s ease-in-out;

    &:hover :nth-child(2) {
        background-color: ${pickProp('isDarkMode', switchValues('#888', '#AAA', '#666'))};
    }
`;

const Circle = styled.div<{ isDarkMode: boolean }>`
    background-color: #888;
    border-radius: 16px;
    height: 16px;
    margin: 2px;
    width: 16px;
`;
