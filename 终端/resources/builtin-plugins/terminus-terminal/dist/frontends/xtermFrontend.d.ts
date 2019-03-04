import { Frontend } from './frontend';
import { Terminal } from 'xterm';
import 'xterm/dist/xterm.css';
export declare class XTermFrontend extends Frontend {
    enableResizing: boolean;
    xterm: Terminal;
    private configuredFontSize;
    private zoom;
    private resizeHandler;
    private configuredTheme;
    constructor();
    attach(host: HTMLElement): void;
    detach(host: HTMLElement): void;
    getSelection(): string;
    copySelection(): void;
    clearSelection(): void;
    focus(): void;
    write(data: string): void;
    clear(): void;
    visualBell(): void;
    scrollToBottom(): void;
    configure(config: any): void;
    setZoom(zoom: number): void;
    private setFontSize;
}
