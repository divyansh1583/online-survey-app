import { Route } from "@angular/router";
import { PlatformComponent } from "./platform.component";

export const PLATFORM_ROUTES: Route[] = [
    {
        path: '',
        component: PlatformComponent,
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.route').then(routes => routes.ADMIN_ROUTES)
            },
            {
                path: '',
                redirectTo: '/platform/admin',
                pathMatch: 'full'
            },
        ]
    },
    // {
    //     path: '',
    //     redirectTo: '/platform',
    //     pathMatch: 'full'
    // },
];