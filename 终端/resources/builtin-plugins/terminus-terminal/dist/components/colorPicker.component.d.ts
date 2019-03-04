import { EventEmitter } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
export declare class ColorPickerComponent {
    model: string;
    title: string;
    modelChange: EventEmitter<string>;
    popover: NgbPopover;
    input: any;
    isOpen: boolean;
    open(): void;
    onOutsideClick($event: any): void;
    onChange(): void;
}
