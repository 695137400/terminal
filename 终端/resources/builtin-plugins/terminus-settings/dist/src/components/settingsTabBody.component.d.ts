import { Component, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SettingsTabProvider } from '../api';
export declare class SettingsTabBodyComponent {
    private componentFactoryResolver;
    provider: SettingsTabProvider;
    placeholder: ViewContainerRef;
    component: ComponentRef<Component>;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
}
