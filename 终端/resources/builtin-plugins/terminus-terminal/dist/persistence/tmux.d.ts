import { SessionOptions, SessionPersistenceProvider } from '../api';
export declare class TMuxBlock {
    time: number;
    number: number;
    error: boolean;
    lines: string[];
    constructor(line: string);
}
export declare class TMuxMessage {
    type: string;
    content: string;
    constructor(line: string);
}
export declare class TMuxCommandProcess {
    private process;
    private rawOutput$;
    private line$;
    private message$;
    private block$;
    private response$;
    private lock;
    private logger;
    constructor();
    command(command: string): Promise<TMuxBlock>;
    destroy(): void;
}
export declare class TMux {
    private process;
    private ready;
    private logger;
    constructor();
    create(id: string, options: SessionOptions): Promise<void>;
    list(): Promise<string[]>;
    getPID(id: string): Promise<number | null>;
    terminate(id: string): Promise<void>;
}
export declare class TMuxPersistenceProvider extends SessionPersistenceProvider {
    id: string;
    displayName: string;
    private tmux;
    constructor();
    isAvailable(): boolean;
    attachSession(recoveryId: any): Promise<SessionOptions>;
    startSession(options: SessionOptions): Promise<any>;
    terminateSession(recoveryId: string): Promise<void>;
}
