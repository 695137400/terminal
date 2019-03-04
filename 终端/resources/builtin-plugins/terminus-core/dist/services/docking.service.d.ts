import { ConfigService } from '../services/config.service';
import { ElectronService } from '../services/electron.service';
import { HostAppService } from '../services/hostApp.service';
export interface IScreen {
    id: string;
    name: string;
}
export declare class DockingService {
    private electron;
    private config;
    private hostApp;
    constructor(electron: ElectronService, config: ConfigService, hostApp: HostAppService);
    dock(): void;
    getCurrentScreen(): any;
    getScreens(): any;
    repositionWindow(): void;
}
