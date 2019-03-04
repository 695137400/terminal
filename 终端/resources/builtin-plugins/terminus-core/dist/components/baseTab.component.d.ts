import { Observable, Subject } from 'rxjs';
import { ViewRef } from '@angular/core';
export interface BaseTabProcess {
    name: string;
}
export declare abstract class BaseTabComponent {
    private static lastTabID;
    id: number;
    title: string;
    customTitle: string;
    hasFocus: boolean;
    hasActivity: boolean;
    hostView: ViewRef;
    protected titleChange: Subject<string>;
    protected focused: Subject<void>;
    protected blurred: Subject<void>;
    protected progress: Subject<number>;
    protected activity: Subject<boolean>;
    protected destroyed: Subject<void>;
    private progressClearTimeout;
    readonly focused$: Observable<void>;
    readonly blurred$: Observable<void>;
    readonly titleChange$: Observable<string>;
    readonly progress$: Observable<number>;
    readonly activity$: Observable<boolean>;
    readonly destroyed$: Observable<void>;
    constructor();
    setTitle(title: string): void;
    setProgress(progress: number): void;
    displayActivity(): void;
    clearActivity(): void;
    getRecoveryToken(): any;
    getCurrentProcess(): Promise<BaseTabProcess>;
    canClose(): Promise<boolean>;
    emitFocused(): void;
    emitBlurred(): void;
    destroy(): void;
}
