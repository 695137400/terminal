import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService, AppService } from 'terminus-core';
import { QuickCmds, ICmdGroup } from '../api';
export declare class QuickCmdsModalComponent {
    modalInstance: NgbActiveModal;
    private config;
    private app;
    cmds: QuickCmds[];
    childFolders: ICmdGroup[];
    quickCmd: string;
    childGroups: ICmdGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(modalInstance: NgbActiveModal, config: ConfigService, app: AppService);
    ngOnInit(): void;
    quickConnect(): void;
    close(): void;
    connect(cmd: QuickCmds): void;
    refresh(): void;
}
