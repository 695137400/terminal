import { HostAppService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
import { WSLShellProvider } from './wsl';
import { PowerShellCoreShellProvider } from './powershellCore';
import { WindowsStockShellsProvider } from './windowsStock';
export declare class WindowsDefaultShellProvider extends ShellProvider {
    private hostApp;
    private providers;
    constructor(psc: PowerShellCoreShellProvider, wsl: WSLShellProvider, stock: WindowsStockShellsProvider, hostApp: HostAppService);
    provide(): Promise<IShell[]>;
}
