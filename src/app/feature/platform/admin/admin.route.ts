import { Route } from "@angular/router";
import path from "node:path";
import { HomeComponent } from "./home/home.component";

export const ADMIN_ROUTES: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];