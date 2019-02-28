import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'terminus-core';
import { SSHConnection, ISSHConnectionGroup } from '../api';
export declare class SSHSettingsTabComponent {
    config: ConfigService;
    private ngbModal;
    connections: SSHConnection[];
    childGroups: ISSHConnectionGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(config: ConfigService, ngbModal: NgbModal);
    createConnection(): void;
    editConnection(connection: SSHConnection): void;
    deleteConnection(connection: SSHConnection): void;
    editGroup(group: ISSHConnectionGroup): void;
    deleteGroup(group: ISSHConnectionGroup): void;
    refresh(): void;
}
