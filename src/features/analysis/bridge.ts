import analyze from '.';
import { createIPCChannel } from '../utils/createIPCChannel';

export const analyzeText = createIPCChannel('analyze:text', (_, text: string) => {
    return analyze(text);
});

export default [analyzeText];
