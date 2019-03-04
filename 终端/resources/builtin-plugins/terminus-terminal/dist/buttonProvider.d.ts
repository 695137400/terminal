import { DomSanitizer } from '@angular/platform-browser';
import { HotkeysService, ToolbarButtonProvider, IToolbarButton, HostAppService, ElectronService } from 'terminus-core';
import { TerminalService } from './services/terminal.service';
export declare class ButtonProvider extends ToolbarButtonProvider {
    private terminal;
    private domSanitizer;
    constructor(terminal: TerminalService, domSanitizer: DomSanitizer, hostApp: HostAppService, electron: ElectronService, hotkeys: HotkeysService);
    provide(): IToolbarButton[];
}
