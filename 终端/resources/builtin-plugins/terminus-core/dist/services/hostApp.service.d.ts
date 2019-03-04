import { Observable } from 'rxjs';
import { NgZone, EventEmitter } from '@angular/core';
import { ElectronService } from './electron.service';
import { LogService } from './log.service';
export declare enum Platform {
    Linux = 0,
    macOS = 1,
    Windows = 2
}
export interface Bounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class HostAppService {
    private zone;
    private electron;
    platform: Platform;
    nodePlatform: string;
    shown: EventEmitter<any>;
    isFullScreen: boolean;
    private preferencesMenu;
    private secondInstance;
    private cliOpenDirectory;
    private cliRunCommand;
    private cliPaste;
    private configChangeBroadcast;
    private logger;
    private windowId;
    readonly preferencesMenu$: Observable<void>;
    readonly secondInstance$: Observable<void>;
    readonly cliOpenDirectory$: Observable<string>;
    readonly cliRunCommand$: Observable<string[]>;
    readonly cliPaste$: Observable<string>;
    readonly configChangeBroadcast$: Observable<void>;
    constructor(zone: NgZone, electron: ElectronService, log: LogService);
    getWindow(): Electron.BrowserWindow;
    newWindow(): void;
    getShell(): any;
    getAppPath(): any;
    getPath(type: string): any;
    toggleFullscreen(): void;
    openDevTools(): void;
    focusWindow(): void;
    minimize(): void;
    maximize(): void;
    unmaximize(): void;
    toggleMaximize(): void;
    setBounds(bounds: Bounds): void;
    setAlwaysOnTop(flag: boolean): void;
    setVibrancy(enable: boolean, type: string): void;
    setTitle(title: string): void;
    setTouchBar(touchBar: Electron.TouchBar): void;
    popupContextMenu(menuDefinition: Electron.MenuItemConstructorOptions[]): void;
    broadcastConfigChange(): void;
    emitReady(): void;
    bringToFront(): void;
    quit(): void;
}
