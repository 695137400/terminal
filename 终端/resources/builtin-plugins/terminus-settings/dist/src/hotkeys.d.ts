import { IHotkeyDescription, HotkeyProvider } from 'terminus-core';
export declare class SettingsHotkeyProvider extends HotkeyProvider {
    hotkeys: IHotkeyDescription[];
    provide(): Promise<IHotkeyDescription[]>;
}
