import { Observable } from 'rxjs';
import deepEqual = require('deep-equal');
import { ConfigService, HostAppService } from 'terminus-core';
import { TerminalColorSchemeProvider, ITerminalColorScheme } from '../api';
export declare class AppearanceSettingsTabComponent {
    private colorSchemeProviders;
    private hostApp;
    config: ConfigService;
    fonts: string[];
    colorSchemes: ITerminalColorScheme[];
    equalComparator: typeof deepEqual;
    editingColorScheme: ITerminalColorScheme;
    schemeChanged: boolean;
    constructor(colorSchemeProviders: TerminalColorSchemeProvider[], hostApp: HostAppService, config: ConfigService);
    ngOnInit(): Promise<void>;
    fontAutocomplete: (text$: Observable<string>) => Observable<string[]>;
    editScheme(scheme: ITerminalColorScheme): void;
    saveScheme(): void;
    cancelEditing(): void;
    deleteScheme(scheme: ITerminalColorScheme): void;
    isCustomScheme(scheme: ITerminalColorScheme): any;
    colorsTrackBy(index: any): any;
}
