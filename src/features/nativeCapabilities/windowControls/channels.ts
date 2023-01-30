import { BrowserWindow } from 'electron';

import { createIPCChannel } from '../../utils/createIPCChannel';

export const minimizeWindow = createIPCChannel('window-minimize', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.minimize();
});

export const toggleMaximizeWindow = createIPCChannel('window-toggle-maximize', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
});

export const closeWindow = createIPCChannel('window-close', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.close();
});

export default [minimizeWindow, toggleMaximizeWindow, closeWindow];
