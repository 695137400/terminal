import { HostAppService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
export declare class Cygwin32ShellProvider extends ShellProvider {
    private hostApp;
    constructor(hostApp: HostAppService);
    provide(): Promise<IShell[]>;
}
