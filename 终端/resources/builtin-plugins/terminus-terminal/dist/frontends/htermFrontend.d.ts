import { Frontend } from './frontend';
export declare class HTermFrontend extends Frontend {
    term: any;
    io: any;
    private htermIframe;
    private initialized;
    private configuredFontSize;
    private configuredLinePadding;
    private configuredBackgroundColor;
    private zoom;
    attach(host: HTMLElement): void;
    getSelection(): string;
    copySelection(): void;
    clearSelection(): void;
    focus(): void;
    write(data: string): void;
    clear(): void;
    configure(config: any): void;
    setZoom(zoom: number): void;
    visualBell(): void;
    scrollToBottom(): void;
    private setFontSize;
    private init;
}
