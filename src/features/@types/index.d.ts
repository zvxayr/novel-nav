import { BrowserWindow } from 'electron';

declare global {
    type Listener = (win: BrowserWindow) => void;
}
