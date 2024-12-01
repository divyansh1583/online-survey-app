import { Route } from "@angular/router";
import path from "node:path";
import { HomeComponent } from "./home/home.component";

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