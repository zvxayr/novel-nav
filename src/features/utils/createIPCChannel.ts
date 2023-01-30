export function createIPCChannel<Args extends any[], R>(channel: string, handler: IPCChannel<Args, R>['handler']) {
    return { channel, handler } as IPCChannel<Args, R>;
}
