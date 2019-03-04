import { HostAppService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
export declare class PowerShellCoreShellProvider extends ShellProvider {
    private hostApp;
    constructor(hostApp: HostAppService);
    provide(): Promise<IShell[]>;
}
