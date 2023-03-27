import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MarvelRoutingModule } from './marvel-routing.module';
import { RouterModule } from '@angular/router';
import { MarvelComponent } from './marvel.component';



@NgModule({
    declarations: [
        MarvelComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MarvelRoutingModule,
        RouterModule,
    ]
})
export class MarvelModule { }
