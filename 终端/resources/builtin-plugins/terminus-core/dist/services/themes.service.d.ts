import { ConfigService } from '../services/config.service';
import { Theme } from '../api/theme';
export declare class ThemesService {
    private config;
    private themes;
    private styleElement;
    constructor(config: ConfigService, themes: Theme[]);
    findTheme(name: string): Theme;
    findCurrentTheme(): Theme;
    applyTheme(theme: Theme): void;
    applyCurrentTheme(): void;
}
