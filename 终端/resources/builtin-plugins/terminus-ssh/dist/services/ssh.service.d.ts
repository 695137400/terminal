import { NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppService, HostAppService, LogService } from 'terminus-core';
import { TerminalTabComponent } from 'terminus-terminal';
import { SSHConnection } from '../api';
import { PasswordStorageService } from './passwordStorage.service';
export declare class SSHService {
    private app;
    private zone;
    private ngbModal;
    private hostApp;
    private passwordStorage;
    private toastr;
    private logger;
    constructor(log: LogService, app: AppService, zone: NgZone, ngbModal: NgbModal, hostApp: HostAppService, passwordStorage: PasswordStorageService, toastr: ToastrService);
    connect(connection: SSHConnection): Promise<TerminalTabComponent>;
}
