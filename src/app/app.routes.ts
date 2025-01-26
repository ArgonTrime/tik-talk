import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: '', component: SearchPageComponent},
        {path: 'profile', component: ProfilePageComponent}

    ]},
    {path: 'login', component: LoginPageComponent}
];
