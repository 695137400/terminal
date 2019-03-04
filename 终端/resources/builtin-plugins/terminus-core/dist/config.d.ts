import { ConfigProvider } from './api/configProvider';
import { Platform } from './services/hostApp.service';
export declare class CoreConfigProvider extends ConfigProvider {
    platformDefaults: {
        [Platform.macOS]: any;
        [Platform.Windows]: any;
        [Platform.Linux]: any;
    };
    defaults: any;
}
