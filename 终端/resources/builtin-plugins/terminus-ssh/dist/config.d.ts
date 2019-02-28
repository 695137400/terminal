import { ConfigProvider } from 'terminus-core';
export declare class SSHConfigProvider extends ConfigProvider {
    defaults: {
        ssh: {
            connections: any[];
            options: {};
        };
        hotkeys: {
            'ssh': string[];
        };
    };
    platformDefaults: {};
}
