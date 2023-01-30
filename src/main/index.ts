import { BrowserWindow, app } from 'electron';
import path from 'path';

import registerListeners from './registerListeners';

async function mainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 560,
        minHeight: 315,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        autoHideMenuBar: true,
        frame: false,
    });

    await win.loadFile(path.join(__dirname, 'index.html'));

    return win;
}

app.on('ready', async () => {
    registerListeners(await mainWindow());

    app.on('activate', async () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            registerListeners(await mainWindow());
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
