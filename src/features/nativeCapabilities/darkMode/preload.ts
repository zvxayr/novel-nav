import { ipcRenderer } from 'electron';

export default {
    toggle: (): Promise<boolean> => ipcRenderer.invoke('dark-mode:toggle'),
    value: (): Promise<boolean> => ipcRenderer.invoke('dark-mode:value'),
} as const;
