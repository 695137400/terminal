import { ConfigService, ElectronService } from 'terminus-core';
import { IShell, ShellProvider, SessionPersistenceProvider } from '../api';
export declare class ShellSettingsTabComponent {
    config: ConfigService;
    private electron;
    private shellProviders;
    shells: IShell[];
    persistenceProviders: SessionPersistenceProvider[];
    environmentVars: {
        key: string;
        value: string;
    }[];
    private configSubscription;
    constructor(config: ConfigService, electron: ElectronService, shellProviders: ShellProvider[], persistenceProviders: SessionPersistenceProvider[]);
    ngOnInit(): Promise<void>;
    ngOnDestroy(): void;
    pickWorkingDirectory(): void;
    reloadEnvironment(): void;
    saveEnvironment(): void;
    addEnvironmentVar(): void;
    removeEnvironmentVar(key: string): void;
}
