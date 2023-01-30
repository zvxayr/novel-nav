import { contextBridge } from 'electron';

import analysis from '../features/analysis/preload';
import events from '../features/events/preload';
import darkMode from '../features/nativeCapabilities/darkMode/preload';
import controls from '../features/nativeCapabilities/windowControls/preload';

const exposedAPI = { darkMode, controls, events, analysis };
contextBridge.exposeInMainWorld('electron', exposedAPI);
export default exposedAPI;
