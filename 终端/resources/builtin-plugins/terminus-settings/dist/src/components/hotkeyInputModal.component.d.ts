import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HotkeysService } from 'terminus-core';
export declare class HotkeyInputModalComponent {
    private modalInstance;
    hotkeys: HotkeysService;
    value: string[];
    timeoutProgress: number;
    private keySubscription;
    private lastKeyEvent;
    private keyTimeoutInterval;
    constructor(modalInstance: NgbActiveModal, hotkeys: HotkeysService);
    splitKeys(keys: string): string[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
}
