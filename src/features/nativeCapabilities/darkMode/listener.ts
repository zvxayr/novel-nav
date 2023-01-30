import { ipcMain, nativeTheme } from 'electron';

function toggleDarkMode() {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light';
    } else {
        nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
}

function isDarkMode() {
    return nativeTheme.shouldUseDarkColors;
}

export const registerDarkModeListeners: Listener = () => {
    ipcMain.handle('dark-mode:toggle', toggleDarkMode);
    ipcMain.handle('dark-mode:value', isDarkMode);
};
