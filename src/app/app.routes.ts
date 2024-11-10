import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'platform', pathMatch: 'full'},
    { 
        path: 'platform', 
        loadChildren: () => import('./feature/platform/platform.routes').then(mod => mod.PLATFORM_ROUTES) 
    }
];
