import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export declare class MultiHotkeyInputComponent {
    private ngbModal;
    model: string[][];
    modelChange: EventEmitter<{}>;
    constructor(ngbModal: NgbModal);
    ngOnInit(): void;
    editItem(item: any): void;
    addItem(): void;
    removeItem(item: any): void;
}
