import { ConfigService } from 'terminus-core';
import { ShellProvider, IShell } from '../api';
export declare class CustomShellProvider extends ShellProvider {
    private config;
    constructor(config: ConfigService);
    provide(): Promise<IShell[]>;
}
