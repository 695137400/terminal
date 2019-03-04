import { ConfigService, ElectronService } from 'terminus-core';
import { TerminalService } from '../services/terminal.service';
export declare class TerminalSettingsTabComponent {
    config: ConfigService;
    private electron;
    private terminal;
    constructor(config: ConfigService, electron: ElectronService, terminal: TerminalService);
    openWSLVolumeMixer(): void;
}
