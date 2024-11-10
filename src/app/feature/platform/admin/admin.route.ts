import { Route } from "@angular/router";
import { SignalComponent } from "./signal/signal.component";


export const ADMIN_ROUTES: Route[] = [
    { path: '', redirectTo: 'signal', pathMatch: 'full' },
    { path: 'signal', component: SignalComponent },
];