import { NgZone } from '@angular/core';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { ElectronService } from './electron.service';
import { HostAppService } from './hostApp.service';
import { ToolbarButtonProvider } from '../api';
export declare class TouchbarService {
    private app;
    private hostApp;
    private toolbarButtonProviders;
    private config;
    private electron;
    private zone;
    private tabsSegmentedControl;
    private tabSegments;
    private nsImageCache;
    constructor(app: AppService, hostApp: HostAppService, toolbarButtonProviders: ToolbarButtonProvider[], config: ConfigService, electron: ElectronService, zone: NgZone);
    update(): void;
    private getButton;
    private getCachedNSImage;
    private shortenTitle;
}
