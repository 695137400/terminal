import { Observable } from 'rxjs';
import { AppService, LogService, ConfigService } from 'terminus-core';
import { IShell, ShellProvider } from '../api';
import { SessionsService } from './sessions.service';
import { TerminalTabComponent } from '../components/terminalTab.component';
export declare class TerminalService {
    private app;
    private sessions;
    private config;
    private shellProviders;
    private shells;
    private logger;
    readonly shells$: Observable<IShell[]>;
    constructor(app: AppService, sessions: SessionsService, config: ConfigService, shellProviders: ShellProvider[], log: LogService);
    getShells(): Promise<IShell[]>;
    reloadShells(): Promise<void>;
    openTab(shell?: IShell, cwd?: string, pause?: boolean): Promise<TerminalTabComponent>;
}
