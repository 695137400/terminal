import { TerminalColorSchemeProvider, ITerminalColorScheme } from './api';
export declare class HyperColorSchemes extends TerminalColorSchemeProvider {
    getSchemes(): Promise<ITerminalColorScheme[]>;
}
