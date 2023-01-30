import { ipcRenderer } from 'electron';

type AllowedEvents = 'maximize' | 'unmaximize' | 'enter-full-screen' | 'leave-full-screen';
export default {
    listen: (event: AllowedEvents, callback: () => void) => {
        ipcRenderer.on(event, () => {
            callback();
        });
    },
};
