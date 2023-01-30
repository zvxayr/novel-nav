import { registerAnalysisListeners } from '../features/analysis/listener';
import { registerDarkModeListeners } from '../features/nativeCapabilities/darkMode/listener';
import { registerWindowControls } from '../features/nativeCapabilities/windowControls/listener';
import { registerWindowEvents } from '../features/nativeCapabilities/windowEvents/listener';

export const registerListeners: Listener = (win) => {
    registerAnalysisListeners(win);
    registerDarkModeListeners(win);
    registerWindowEvents(win);
    registerWindowControls(win);
};

export default registerListeners;
