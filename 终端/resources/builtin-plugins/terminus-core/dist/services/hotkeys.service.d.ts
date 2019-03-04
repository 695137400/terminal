import { NgZone, EventEmitter } from '@angular/core';
import { IHotkeyDescription, HotkeyProvider } from '../api/hotkeyProvider';
import { NativeKeyEvent } from './hotkeys.util';
import { ConfigService } from '../services/config.service';
import { ElectronService } from '../services/electron.service';
export interface PartialHotkeyMatch {
    id: string;
    strokes: string[];
    matchedLength: number;
}
export declare class HotkeysService {
    private zone;
    private electron;
    private config;
    private hotkeyProviders;
    key: EventEmitter<NativeKeyEvent>;
    matchedHotkey: EventEmitter<string>;
    globalHotkey: EventEmitter<{}>;
    private currentKeystrokes;
    private disabledLevel;
    private hotkeyDescriptions;
    constructor(zone: NgZone, electron: ElectronService, config: ConfigService, hotkeyProviders: HotkeyProvider[]);
    pushKeystroke(name: any, nativeEvent: any): void;
    processKeystrokes(): void;
    emitKeyEvent(nativeEvent: any): void;
    clearCurrentKeystrokes(): void;
    getCurrentKeystrokes(): string[];
    registerGlobalHotkey(): void;
    getHotkeysConfig(): {};
    getHotkeysConfigRecursive(branch: any): {};
    getCurrentFullyMatchedHotkey(): string;
    getCurrentPartiallyMatchedHotkeys(): PartialHotkeyMatch[];
    getHotkeyDescription(id: string): IHotkeyDescription;
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
    getHotkeyDescriptions(): Promise<IHotkeyDescription[]>;
}
export declare class AppHotkeyProvider extends HotkeyProvider {
    hotkeys: IHotkeyDescription[];
    provide(): Promise<IHotkeyDescription[]>;
}
