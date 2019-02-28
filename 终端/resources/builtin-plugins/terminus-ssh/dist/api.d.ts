import { BaseSession } from 'terminus-terminal';
export interface LoginScript {
    expect?: string;
    send: string;
    isRegex?: boolean;
    optional?: boolean;
}
export interface SSHConnection {
    name?: string;
    host: string;
    port: number;
    user: string;
    password?: string;
    privateKey?: string;
    group?: string;
    scripts?: LoginScript[];
    keepaliveInterval?: number;
    keepaliveCountMax?: number;
    readyTimeout?: number;
}
export declare class SSHSession extends BaseSession {
    private shell;
    scripts?: LoginScript[];
    constructor(shell: any, conn: SSHConnection);
    start(): void;
    resize(columns: any, rows: any): void;
    write(data: any): void;
    kill(signal?: string): void;
    getChildProcesses(): Promise<any[]>;
    gracefullyKillProcess(): Promise<void>;
    getWorkingDirectory(): Promise<string>;
    private executeUnconditionalScripts;
}
export interface ISSHConnectionGroup {
    name: string;
    connections: SSHConnection[];
}
