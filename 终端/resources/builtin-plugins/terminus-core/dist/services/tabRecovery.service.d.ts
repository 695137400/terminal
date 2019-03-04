import { TabRecoveryProvider } from '../api/tabRecovery';
import { BaseTabComponent } from '../components/baseTab.component';
import { Logger, LogService } from '../services/log.service';
import { AppService } from '../services/app.service';
import { ConfigService } from '../services/config.service';
export declare class TabRecoveryService {
    private tabRecoveryProviders;
    private app;
    private config;
    logger: Logger;
    constructor(tabRecoveryProviders: TabRecoveryProvider[], app: AppService, config: ConfigService, log: LogService);
    saveTabs(tabs: BaseTabComponent[]): void;
    recoverTabs(): Promise<void>;
}
