export declare const metaKeyName: any;
export declare const altKeyName: any;
export interface NativeKeyEvent {
    event?: string;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    key: string;
    keyCode: string;
}
export declare function stringifyKeySequence(events: NativeKeyEvent[]): string[];
