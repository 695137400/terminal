import { TabRecoveryProvider, RecoveredTab } from 'terminus-core';
import { SessionsService } from './services/sessions.service';
export declare class RecoveryProvider extends TabRecoveryProvider {
    private sessions;
    constructor(sessions: SessionsService);
    recover(recoveryToken: any): Promise<RecoveredTab>;
}
