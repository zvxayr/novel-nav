export const registerWindowEvents: Listener = (win) => {
    win.on('maximize', () => {
        win.webContents.send('maximize-change', true);
    });

    win.on('unmaximize', () => {
        win.webContents.send('maximize-change', false);
    });

    win.on('enter-full-screen', () => {
        win.webContents.send('full-screen-change', true);
    });

    win.on('leave-full-screen', () => {
        win.webContents.send('full-screen-change', false);
    });
};
