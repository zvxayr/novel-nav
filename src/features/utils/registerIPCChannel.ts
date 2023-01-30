import { ipcMain } from 'electron';

export function registerIPCChannel<Args extends any[] = [], R = void>(ipcChannel: IPCChannel<Args, R>): void {
    ipcMain.handle(ipcChannel.channel, ipcChannel.handler);
}
