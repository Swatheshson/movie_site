import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { DcPage } from '../dc-page/dc-page';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'dcpage', component: DcPage }
];