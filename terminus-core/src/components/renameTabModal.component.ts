import { Component, Input, ElementRef, ViewChild } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'rename-tab-modal',
    template: require('./renameTabModal.component.pug'),
})
export class RenameTabModalComponent {
    @Input() value: string
    @ViewChild('input') input: ElementRef

    constructor (
        private modalInstance: NgbActiveModal
    ) { }

    ngOnInit () {
        setTimeout(() => {
            this.input.nativeElement.focus()
        })
    }

    save () {
        this.modalInstance.close(this.value)
    }

    close () {
        this.modalInstance.dismiss()
    }
}
