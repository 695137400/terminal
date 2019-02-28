import { ConfigService } from 'terminus-core';
import { QuickCmds, ICmdGroup } from '../api';
export declare class SSHSettingsTabComponent {
    config: ConfigService;
    connections: QuickCmds[];
    childGroups: ICmdGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(config: ConfigService);
    createConnection(): void;
    editConnection(connection: QuickCmds): void;
    deleteConnection(connection: QuickCmds): void;
    editGroup(group: ICmdGroup): void;
    deleteGroup(group: ICmdGroup): void;
    refresh(): void;
}
