import { TerminalColorSchemeProvider, ITerminalColorScheme } from 'terminus-terminal';
export declare class ColorSchemes extends TerminalColorSchemeProvider {
    getSchemes(): Promise<ITerminalColorScheme[]>;
}
