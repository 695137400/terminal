import { Observable } from 'rxjs';
import { ConfigProvider } from '../api/configProvider';
import { ElectronService } from './electron.service';
import { HostAppService } from './hostApp.service';
export declare class ConfigProxy {
    constructor(real: any, defaults: any);
    getValue(key: string): any;
    setValue(key: string, value: any): void;
}
export declare class ConfigService {
    private hostApp;
    store: any;
    restartRequested: boolean;
    private changed;
    private _store;
    private path;
    private defaults;
    private servicesCache;
    readonly changed$: Observable<void>;
    constructor(electron: ElectronService, hostApp: HostAppService, configProviders: ConfigProvider[]);
    getDefaults(): any;
    load(): void;
    save(): void;
    readRaw(): string;
    writeRaw(data: string): void;
    emitChange(): void;
    requestRestart(): void;
    enabledServices<T>(services: T[]): T[];
}
