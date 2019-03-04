import { HostAppService, ElectronService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
export declare class WindowsStockShellsProvider extends ShellProvider {
    private hostApp;
    private electron;
    constructor(hostApp: HostAppService, electron: ElectronService);
    provide(): Promise<IShell[]>;
}
