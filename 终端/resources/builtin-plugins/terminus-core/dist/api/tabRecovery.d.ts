import { TabComponentType } from '../services/app.service';
export interface RecoveredTab {
    type: TabComponentType;
    options?: any;
}
export declare abstract class TabRecoveryProvider {
    abstract recover(recoveryToken: any): Promise<RecoveredTab | null>;
}
