export const registerWindowEvents: Listener = win => {
    win.on('maximize', () => {
        win.webContents.send('maximize');
    });

    win.on('unmaximize', () => {
        win.webContents.send('unmaximize');
    });

    win.on('enter-full-screen', () => {
        win.webContents.send('enter-full-screen');
    });

    win.on('leave-full-screen', () => {
        win.webContents.send('leave-full-screen');
    });
};
