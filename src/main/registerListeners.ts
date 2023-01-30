import analysisListeners from '../features/analysis/bridge';
import { registerWindowEvents } from '../features/events/listener';
import DarkModeListeners from '../features/nativeCapabilities/darkMode/channels';
import WindowControlListeners from '../features/nativeCapabilities/windowControls/channels';
import { registerIPCChannel } from '../features/utils/registerIPCChannel';

export const registerListeners: Listener = (win) => {
    analysisListeners.map(registerIPCChannel);
    DarkModeListeners.map(registerIPCChannel);
    WindowControlListeners.map(registerIPCChannel);

    registerWindowEvents(win);
};

export default registerListeners;
