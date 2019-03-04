import { ModuleWithProviders } from '@angular/core';
import { AppRootComponent } from './components/appRoot.component';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import 'ng2-dnd/bundles/style.css';
export default class AppModule {
    static forRoot(): ModuleWithProviders;
}
export { AppRootComponent as bootstrap };
export * from './api';
