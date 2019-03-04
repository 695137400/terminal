import { ConfigProvider } from 'terminus-core';
export declare class TerminalConfigProvider extends ConfigProvider {
    defaults: {
        hotkeys: {
            shell: {
                __nonStructural: boolean;
            };
        };
        terminal: {
            frontend: string;
            autoOpen: boolean;
            fontSize: number;
            linePadding: number;
            bell: string;
            bracketedPaste: boolean;
            background: string;
            ligatures: boolean;
            cursor: string;
            cursorBlink: boolean;
            customShell: string;
            rightClick: string;
            copyOnSelect: boolean;
            workingDirectory: string;
            altIsMeta: boolean;
            colorScheme: {
                __nonStructural: boolean;
                name: string;
                foreground: string;
                background: string;
                cursor: string;
                colors: string[];
            };
            customColorSchemes: any[];
            environment: {};
        };
    };
    platformDefaults: {
        [Platform.macOS]: {
            terminal: {
                font: string;
                shell: string;
                persistence: string;
            };
            hotkeys: {
                'ctrl-c': string[];
                'copy': string[];
                'paste': any[];
                'clear': string[];
                'zoom-in': string[];
                'zoom-out': string[];
                'reset-zoom': string[];
                'new-tab': (string | string[])[];
                'home': string[];
                'end': string[];
                'previous-word': string[];
                'next-word': string[];
                'delete-previous-word': string[];
                'delete-next-word': string[];
            };
        };
        [Platform.Windows]: {
            terminal: {
                font: string;
                shell: string;
                persistence: any;
                rightClick: string;
                copyOnSelect: boolean;
            };
            hotkeys: {
                'ctrl-c': string[];
                'copy': string[];
                'paste': string[];
                'clear': string[];
                'zoom-in': string[];
                'zoom-out': string[];
                'reset-zoom': string[];
                'new-tab': (string | string[])[];
                'home': string[];
                'end': string[];
                'previous-word': string[];
                'next-word': string[];
                'delete-previous-word': string[];
                'delete-next-word': string[];
            };
        };
        [Platform.Linux]: {
            terminal: {
                font: string;
                shell: string;
                persistence: string;
            };
            hotkeys: {
                'ctrl-c': string[];
                'copy': string[];
                'paste': string[];
                'clear': string[];
                'zoom-in': string[];
                'zoom-out': string[];
                'reset-zoom': string[];
                'new-tab': (string | string[])[];
                'home': string[];
                'end': string[];
                'previous-word': string[];
                'next-word': string[];
                'delete-previous-word': string[];
                'delete-next-word': string[];
            };
        };
    };
}
