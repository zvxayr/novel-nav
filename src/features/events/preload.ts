import { ipcRenderer } from 'electron';

export default {
    onMaximizeChange: (callback: (isMaximized: boolean) => void) => {
        ipcRenderer.on('maximize-change', (_, isMaximized) => {
            callback(isMaximized);
        });
    },
    onFullScreenChange: (callback: (isMaximized: boolean) => void) => {
        ipcRenderer.on('full-screen-change', (_, isFullScreen) => {
            callback(isFullScreen);
        });
    },
};
