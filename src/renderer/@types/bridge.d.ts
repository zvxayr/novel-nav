import exposedAPI from '../../preload';

declare global {
    interface Window {
        electron: typeof exposedAPI;
    }

    const electron: typeof exposedAPI;
}
