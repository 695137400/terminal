import { NgZone, ElementRef } from '@angular/core';
import { SortableComponent } from 'ng2-dnd';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseTabComponent } from './baseTab.component';
import { ElectronService } from '../services/electron.service';
import { AppService } from '../services/app.service';
import { HostAppService } from '../services/hostApp.service';
export declare class TabHeaderComponent {
    app: AppService;
    private electron;
    private zone;
    private hostApp;
    private ngbModal;
    private parentDraggable;
    index: number;
    active: boolean;
    hasActivity: boolean;
    tab: BaseTabComponent;
    progress: number;
    handle: ElementRef;
    private completionNotificationEnabled;
    constructor(app: AppService, electron: ElectronService, zone: NgZone, hostApp: HostAppService, ngbModal: NgbModal, parentDraggable: SortableComponent);
    ngOnInit(): void;
    onDoubleClick(): void;
    onAuxClick($event: MouseEvent): Promise<void>;
}
