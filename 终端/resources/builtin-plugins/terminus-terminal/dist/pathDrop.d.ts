import { TerminalDecorator } from './api';
import { TerminalTabComponent } from './components/terminalTab.component';
export declare class PathDropDecorator extends TerminalDecorator {
    private subscriptions;
    attach(terminal: TerminalTabComponent): void;
    injectPath(terminal: TerminalTabComponent, path: string): void;
    detach(terminal: TerminalTabComponent): void;
}
