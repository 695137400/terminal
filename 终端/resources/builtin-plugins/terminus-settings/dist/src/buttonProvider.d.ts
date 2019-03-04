import { DomSanitizer } from '@angular/platform-browser';
import { ToolbarButtonProvider, IToolbarButton, AppService, HostAppService, HotkeysService } from 'terminus-core';
export declare class ButtonProvider extends ToolbarButtonProvider {
    private app;
    private domSanitizer;
    constructor(hostApp: HostAppService, hotkeys: HotkeysService, app: AppService, domSanitizer: DomSanitizer);
    provide(): IToolbarButton[];
    open(): void;
}
