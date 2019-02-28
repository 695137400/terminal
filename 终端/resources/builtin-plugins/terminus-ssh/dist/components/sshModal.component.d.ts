import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfigService, AppService } from 'terminus-core';
import { SSHService } from '../services/ssh.service';
import { SSHConnection, ISSHConnectionGroup } from '../api';
export declare class SSHModalComponent {
    modalInstance: NgbActiveModal;
    private config;
    private ssh;
    private app;
    private toastr;
    connections: SSHConnection[];
    childFolders: ISSHConnectionGroup[];
    quickTarget: string;
    lastConnection: SSHConnection;
    childGroups: ISSHConnectionGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(modalInstance: NgbActiveModal, config: ConfigService, ssh: SSHService, app: AppService, toastr: ToastrService);
    ngOnInit(): void;
    quickConnect(): void;
    clearLastConnection(): void;
    connect(connection: SSHConnection): void;
    manageConnections(): void;
    close(): void;
    refresh(): void;
}
