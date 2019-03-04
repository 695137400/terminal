import { ElectronService } from './electron.service';
import { HostAppService } from './hostApp.service';
export declare class ShellIntegrationService {
    private electron;
    private hostApp;
    private automatorWorkflows;
    private automatorWorkflowsLocation;
    private automatorWorkflowsDestination;
    private registryKeys;
    constructor(electron: ElectronService, hostApp: HostAppService);
    updatePaths(): Promise<void>;
    isInstalled(): Promise<boolean>;
    install(): Promise<void>;
}
