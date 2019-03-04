import { IHotkeyDescription, HotkeyProvider } from 'terminus-core';
import { TerminalService } from './services/terminal.service';
export declare class TerminalHotkeyProvider extends HotkeyProvider {
    private terminal;
    hotkeys: IHotkeyDescription[];
    constructor(terminal: TerminalService);
    provide(): Promise<IHotkeyDescription[]>;
}
