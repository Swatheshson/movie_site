import { Routes } from '@angular/router';
import { Home} from '../home/home';
import { DcPage } from '../dc-page/dc-page';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home',component:Home},
    {path: 'dcpage',component:DcPage},

    {path:'',redirectTo:'home',pathMatch:'full'}
];


