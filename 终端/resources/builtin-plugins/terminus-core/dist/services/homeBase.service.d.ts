import { ElectronService } from './electron.service';
import { ConfigService } from './config.service';
export declare class HomeBaseService {
    private electron;
    private config;
    appVersion: string;
    constructor(electron: ElectronService, config: ConfigService);
    openGitHub(): void;
    reportBug(): void;
    enableAnalytics(): void;
}
