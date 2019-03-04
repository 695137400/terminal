import { HostAppService } from 'terminus-core';
import { HotkeysService, AppService, ConfigService } from 'terminus-core';
import { TerminalTabComponent } from './components/terminalTab.component';
import { BaseSession } from './services/sessions.service';
import { TerminalFrontendService } from './services/terminalFrontend.service';
import { TerminalService } from './services/terminal.service';
export default class TerminalModule {
    constructor(app: AppService, config: ConfigService, hotkeys: HotkeysService, terminal: TerminalService, hostApp: HostAppService);
}
export { TerminalService, BaseSession, TerminalTabComponent, TerminalFrontendService };
export * from './api';
