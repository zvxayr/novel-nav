import { BrowserWindow } from 'electron';
import { IpcMainInvokeEvent } from 'electron';

declare global {
    type Listener = (win: BrowserWindow) => void;

    type Action<T> = {
        payload: T;
        type: string;
    };

    interface IPCChannel<Args extends any[], R> {
        channel: string;
        handler: (event: IpcMainInvokeEvent, ...args: Args) => R;
    }
}
