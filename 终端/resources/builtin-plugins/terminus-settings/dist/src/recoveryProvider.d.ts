import { TabRecoveryProvider, RecoveredTab } from 'terminus-core';
export declare class RecoveryProvider extends TabRecoveryProvider {
    recover(recoveryToken: any): Promise<RecoveredTab>;
}
