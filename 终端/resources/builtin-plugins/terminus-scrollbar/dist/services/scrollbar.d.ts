import { AppService, LogService } from 'terminus-core';
export declare class ScrollbarService {
    private app;
    private logger;
    private knownTabs;
    constructor(app: AppService, log: LogService);
    init(): void;
    onTabsChange(): void;
    initScrollbar(tab: any): void;
}
