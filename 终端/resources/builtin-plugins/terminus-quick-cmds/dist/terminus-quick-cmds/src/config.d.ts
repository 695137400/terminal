import { ConfigProvider } from 'terminus-core';
export declare class QuickCmdsConfigProvider extends ConfigProvider {
    defaults: {
        qc: {
            cmds: any[];
        };
        hotkeys: {
            'qc': string[];
        };
    };
    platformDefaults: {};
}
