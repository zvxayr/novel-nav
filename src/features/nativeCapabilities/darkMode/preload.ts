import { invokeIPCChannel } from '../../utils/invokeIPCChannel';
import { isDarkMode, toggleDarkMode } from './channels';

export default {
    toggle: () => invokeIPCChannel(toggleDarkMode),
    value: () => invokeIPCChannel(isDarkMode),
};
