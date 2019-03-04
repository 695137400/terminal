export interface IHotkeyDescription {
    id: string;
    name: string;
}
export declare abstract class HotkeyProvider {
    hotkeys: IHotkeyDescription[];
    abstract provide(): Promise<IHotkeyDescription[]>;
}
