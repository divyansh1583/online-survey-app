import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'platform',
        loadChildren: () => 
            import('./feature/platform/platform.routes').then(routes => routes.PLATFORM_ROUTES)
    },
    {
        path: '',
        redirectTo: 'platform',
        pathMatch: 'full'
    },
];
