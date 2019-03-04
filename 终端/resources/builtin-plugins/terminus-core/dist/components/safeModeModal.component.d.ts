import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export declare class SafeModeModalComponent {
    modalInstance: NgbActiveModal;
    error: Error;
    constructor(modalInstance: NgbActiveModal);
    close(): void;
}
