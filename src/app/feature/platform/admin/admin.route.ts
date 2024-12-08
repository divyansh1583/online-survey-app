import { Route } from "@angular/router";
export const ADMIN_ROUTES: Route[] = [
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent), 
    },
    {
        path: 'signal',
        loadComponent: () =>
            import('./experiment/signal/signal.component').then((m) => m.SignalComponent), 
    },
    {
        path: 'hydration',
        loadComponent: () =>
            import('./experiment/hydration/hydration.component').then((m) => m.HydrationComponent), 
    },
    {
        path: 'date-time-picker',
        loadComponent: () =>
            import('./experiment/date-time-picker/date-time-picker.component').then((m) => m.DateTimePickerComponent), 
    },
    {
        path: 'linked-signals',
        loadComponent: () =>
            import('./experiment/linked-signals/linked-signals.component').then((m) => m.LinkedSignalsComponent), 
    },
    {
        path: '',
        redirectTo: '/platform/admin/home',
        pathMatch: 'full'
    },
];