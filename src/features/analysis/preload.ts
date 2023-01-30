import { ipcRenderer } from 'electron';

export default {
    nlp: (text: string) => ipcRenderer.invoke('analyze-text', text),
};
