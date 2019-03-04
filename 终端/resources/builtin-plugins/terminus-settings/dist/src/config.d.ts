import { ConfigProvider } from 'terminus-core';
export declare class SettingsConfigProvider extends ConfigProvider {
    defaults: {};
    platformDefaults: {
        [Platform.macOS]: {
            hotkeys: {
                settings: string[];
            };
        };
        [Platform.Windows]: {
            hotkeys: {
                settings: string[];
            };
        };
        [Platform.Linux]: {
            hotkeys: {
                settings: string[];
            };
        };
    };
}
