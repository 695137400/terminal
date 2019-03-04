import { Observable } from 'rxjs';
import { TerminalTabComponent } from './components/terminalTab.component';
export declare abstract class TerminalDecorator {
    attach(_terminal: TerminalTabComponent): void;
    detach(_terminal: TerminalTabComponent): void;
}
export interface ResizeEvent {
    columns: number;
    rows: number;
}
export interface SessionOptions {
    name?: string;
    command?: string;
    args?: string[];
    cwd?: string;
    env?: any;
    width?: number;
    height?: number;
    recoveryId?: string;
    recoveredTruePID$?: Observable<number>;
    pauseAfterExit?: boolean;
}
export declare abstract class SessionPersistenceProvider {
    abstract id: string;
    abstract displayName: string;
    abstract isAvailable(): boolean;
    abstract attachSession(recoveryId: any): Promise<SessionOptions>;
    abstract startSession(options: SessionOptions): Promise<any>;
    abstract terminateSession(recoveryId: string): Promise<void>;
}
export interface ITerminalColorScheme {
    name: string;
    foreground: string;
    background: string;
    cursor: string;
    colors: string[];
}
export declare abstract class TerminalColorSchemeProvider {
    abstract getSchemes(): Promise<ITerminalColorScheme[]>;
}
export interface IShell {
    id: string;
    name?: string;
    command: string;
    args?: string[];
    env?: any;
    fsBase?: string;
}
export declare abstract class ShellProvider {
    abstract provide(): Promise<IShell[]>;
}
