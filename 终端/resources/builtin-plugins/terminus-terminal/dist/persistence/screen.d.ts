import { LogService, ElectronService } from 'terminus-core';
import { SessionOptions, SessionPersistenceProvider } from '../api';
export declare class ScreenPersistenceProvider extends SessionPersistenceProvider {
    private electron;
    id: string;
    displayName: string;
    private logger;
    constructor(log: LogService, electron: ElectronService);
    isAvailable(): boolean;
    attachSession(recoveryId: any): Promise<SessionOptions>;
    extractShellPID(screenPID: number): Promise<number>;
    startSession(options: SessionOptions): Promise<any>;
    terminateSession(recoveryId: string): Promise<void>;
    private prepareConfig;
}
