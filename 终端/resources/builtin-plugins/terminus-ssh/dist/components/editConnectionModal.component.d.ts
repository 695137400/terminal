import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ElectronService, HostAppService } from 'terminus-core';
import { PasswordStorageService } from '../services/passwordStorage.service';
import { SSHConnection, LoginScript } from '../api';
export declare class EditConnectionModalComponent {
    private modalInstance;
    private electron;
    private hostApp;
    private passwordStorage;
    connection: SSHConnection;
    newScript: LoginScript;
    hasSavedPassword: boolean;
    constructor(modalInstance: NgbActiveModal, electron: ElectronService, hostApp: HostAppService, passwordStorage: PasswordStorageService);
    ngOnInit(): Promise<void>;
    clearSavedPassword(): void;
    selectPrivateKey(): void;
    save(): void;
    cancel(): void;
    moveScriptUp(script: LoginScript): void;
    moveScriptDown(script: LoginScript): void;
    deleteScript(script: LoginScript): void;
    addScript(): void;
    clearScript(): void;
}
