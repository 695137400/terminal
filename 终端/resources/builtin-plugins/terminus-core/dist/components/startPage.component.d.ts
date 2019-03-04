import { ConfigService } from '../services/config.service';
import { HomeBaseService } from '../services/homeBase.service';
import { IToolbarButton, ToolbarButtonProvider } from '../api';
export declare class StartPageComponent {
    private config;
    homeBase: HomeBaseService;
    private toolbarButtonProviders;
    version: string;
    constructor(config: ConfigService, homeBase: HomeBaseService, toolbarButtonProviders: ToolbarButtonProvider[]);
    getButtons(): IToolbarButton[];
}
