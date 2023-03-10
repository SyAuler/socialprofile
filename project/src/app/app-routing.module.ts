import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountLayoutComponent } from './shared/account-layout/account-layout.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
        ]
    },
    {
        path: 'account',
        component: AccountLayoutComponent,
        children: [
            /* {
                path: 'account',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule)
            }, */
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
/*  */