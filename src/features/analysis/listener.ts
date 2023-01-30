import { ipcMain } from 'electron';

import analyze from '.';

export const registerAnalysisListeners: Listener = () => {
    ipcMain.handle('analyze-text', (_, text: string) => analyze(text));
};
