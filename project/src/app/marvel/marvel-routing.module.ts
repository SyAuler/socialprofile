import { NgModule } from '@angular/core';
import { MarvelComponent } from './marvel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MarvelComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class MarvelRoutingModule { }
