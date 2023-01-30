import { nativeTheme } from 'electron';

import { createIPCChannel } from '../../utils/createIPCChannel';

export const toggleDarkMode = createIPCChannel('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light';
    } else {
        nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
});

export const isDarkMode = createIPCChannel('dark-mode:value', () => {
    return nativeTheme.shouldUseDarkColors;
});

export default [toggleDarkMode, isDarkMode];
