import { ipcRenderer } from 'electron';

export function invokeIPCChannel<Args extends any[] = [], R = void>(
    ipcChannel: IPCChannel<Args, R>,
    ...args: Args
): Promise<R> {
    return ipcRenderer.invoke(ipcChannel.channel, ...args);
}
