import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'terminus-core';
import { QuickCmds, ICmdGroup } from '../api';
export declare class QuickCmdsSettingsTabComponent {
    config: ConfigService;
    private ngbModal;
    commands: QuickCmds[];
    childGroups: ICmdGroup[];
    groupCollapsed: {
        [id: string]: boolean;
    };
    constructor(config: ConfigService, ngbModal: NgbModal);
    createCommand(): void;
    editCommand(command: QuickCmds): void;
    deleteCommand(command: QuickCmds): void;
    editGroup(group: ICmdGroup): void;
    deleteGroup(group: ICmdGroup): void;
    refresh(): void;
}
