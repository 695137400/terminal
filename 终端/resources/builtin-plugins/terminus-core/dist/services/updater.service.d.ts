import { LogService } from './log.service';
import { ElectronService } from './electron.service';
export interface Update {
    version: string;
    url: string;
}
export declare class UpdaterService {
    private electron;
    private logger;
    constructor(log: LogService, electron: ElectronService);
    check(): Promise<Update>;
}
