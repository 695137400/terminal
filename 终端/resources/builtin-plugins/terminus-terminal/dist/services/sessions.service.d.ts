import { Observable, Subject } from 'rxjs';
import { Logger, LogService, ConfigService } from 'terminus-core';
import { SessionOptions, SessionPersistenceProvider } from '../api';
export interface IChildProcess {
    pid: number;
    ppid: number;
    command: string;
}
export declare abstract class BaseSession {
    open: boolean;
    name: string;
    recoveryId: string;
    truePID: number;
    protected output: Subject<string>;
    protected closed: Subject<void>;
    protected destroyed: Subject<void>;
    private initialDataBuffer;
    private initialDataBufferReleased;
    readonly output$: Observable<string>;
    readonly closed$: Observable<void>;
    readonly destroyed$: Observable<void>;
    emitOutput(data: string): void;
    releaseInitialDataBuffer(): void;
    abstract start(options: SessionOptions): any;
    abstract resize(columns: any, rows: any): any;
    abstract write(data: any): any;
    abstract kill(signal?: string): any;
    abstract getChildProcesses(): Promise<IChildProcess[]>;
    abstract gracefullyKillProcess(): Promise<void>;
    abstract getWorkingDirectory(): Promise<string>;
    destroy(): Promise<void>;
}
export declare class Session extends BaseSession {
    private pty;
    private pauseAfterExit;
    start(options: SessionOptions): void;
    resize(columns: any, rows: any): void;
    write(data: any): void;
    kill(signal?: string): void;
    getChildProcesses(): Promise<IChildProcess[]>;
    gracefullyKillProcess(): Promise<void>;
    getWorkingDirectory(): Promise<string>;
}
export declare class SessionsService {
    private persistenceProviders;
    private config;
    sessions: {
        [id: string]: BaseSession;
    };
    logger: Logger;
    private lastID;
    constructor(persistenceProviders: SessionPersistenceProvider[], config: ConfigService, log: LogService);
    prepareNewSession(options: SessionOptions): Promise<SessionOptions>;
    addSession(session: BaseSession, options: SessionOptions): BaseSession;
    recover(recoveryId: string): Promise<SessionOptions>;
    private getPersistence;
}
