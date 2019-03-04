import { TouchBar, BrowserWindow, Menu, MenuItem } from 'electron';
export declare class ElectronService {
    app: any;
    ipcRenderer: any;
    shell: any;
    dialog: any;
    clipboard: any;
    globalShortcut: any;
    nativeImage: any;
    screen: any;
    remote: any;
    TouchBar: typeof TouchBar;
    BrowserWindow: typeof BrowserWindow;
    Menu: typeof Menu;
    MenuItem: typeof MenuItem;
    private electron;
    constructor();
    remoteRequire(name: string): any;
    remoteRequirePluginModule(plugin: string, module: string, globals: any): any;
    remoteResolvePluginModule(plugin: string, module: string, globals: any): any;
    loseFocus(): void;
}
