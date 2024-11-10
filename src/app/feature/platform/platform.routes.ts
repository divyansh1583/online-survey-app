import { Route } from "@angular/router";
import { PlatformComponent } from "./platform.component";

export const PLATFORM_ROUTES: Route[] = [
    { path: '', redirectTo: 'web', pathMatch: 'full' },
    {
        path: 'web',
        component: PlatformComponent,
        children: [
            {
                path: '',
                redirectTo: 'admin',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.route').then(mod => mod.ADMIN_ROUTES)
            }
        ]
    }
];