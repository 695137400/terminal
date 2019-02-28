import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotkeysService, ToolbarButtonProvider, IToolbarButton } from 'terminus-core';
export declare class ButtonProvider extends ToolbarButtonProvider {
    private ngbModal;
    private domSanitizer;
    constructor(ngbModal: NgbModal, domSanitizer: DomSanitizer, hotkeys: HotkeysService);
    activate(): void;
    provide(): IToolbarButton[];
}
