import { invokeIPCChannel } from '../../utils/invokeIPCChannel';
import { closeWindow, minimizeWindow, toggleMaximizeWindow } from './channels';

export default {
    minimize: () => invokeIPCChannel(minimizeWindow),
    toggleMaximize: () => invokeIPCChannel(toggleMaximizeWindow),
    close: () => invokeIPCChannel(closeWindow),
};
