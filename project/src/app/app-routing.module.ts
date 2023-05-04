import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';

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
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
            },
            {
                path: 'marvel',
                loadChildren: () => import('./marvel/marvel.module').then(m => m.MarvelModule)
            },
            {
                path: 'planner',
                loadChildren: () => import('./planner/planner.module').then(m => m.PlannerModule)
            },
            {
                path: 'month-planner',
                loadChildren: () => import('./month-planner/month-planner.module').then(m => m.MonthPlannerModule)
            },
            {
                path: 'week-planner',
                loadChildren: () => import('./week-planner/week-planner.module').then(m => m.WeekPlannerModule)
            },
            {
                path: 'daily-planner',
                loadChildren: () => import('./daily-planner/daily-planner.module').then(m => m.DailyPlannerModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
/*  */