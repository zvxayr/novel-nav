import { ipcMain } from 'electron';

export const registerWindowControls: Listener = win => {
    ipcMain.handle('window-minimize', () => win.minimize());
    ipcMain.handle('window-toggle-maximize', () => {
        if (win.isMaximized()) {
            win.unmaximize();
            return false;
        } else {
            win.maximize();
            return true;
        }
    });
    ipcMain.handle('window-close', () => win.close());
};
