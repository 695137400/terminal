import { ElectronService } from './electron.service';
export declare class Logger {
    private winstonLogger;
    private name;
    constructor(winstonLogger: any, name: string);
    doLog(level: string, ...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    log(...args: any[]): void;
}
export declare class LogService {
    private log;
    constructor(electron: ElectronService);
    create(name: string): Logger;
}
