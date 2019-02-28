import { NgZone } from '@angular/core';
import { SSHConnection } from '../api';
export declare class PasswordStorageService {
    private zone;
    constructor(zone: NgZone);
    savePassword(connection: SSHConnection, password: string): void;
    deletePassword(connection: SSHConnection): void;
    loadPassword(connection: SSHConnection): Promise<string>;
}
