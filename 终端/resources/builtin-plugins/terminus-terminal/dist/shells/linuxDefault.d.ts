import { HostAppService, LogService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
export declare class LinuxDefaultShellProvider extends ShellProvider {
    private hostApp;
    private logger;
    constructor(hostApp: HostAppService, log: LogService);
    provide(): Promise<IShell[]>;
}
