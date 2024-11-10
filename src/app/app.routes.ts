import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    { 
        path: 'admin', 
        loadChildren: () => import('./feature/platform/admin/admin.route').then(mod => mod.ADMIN_ROUTES) 
    }
];
