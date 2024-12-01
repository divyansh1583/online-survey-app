import { Route } from "@angular/router";
export const ADMIN_ROUTES: Route[] = [
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent), 
    },
    {
        path: '',
        redirectTo: '/platform/admin/home',
        pathMatch: 'full'
    },
];