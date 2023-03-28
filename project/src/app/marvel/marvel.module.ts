import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MarvelRoutingModule } from './marvel-routing.module';
import { RouterModule } from '@angular/router';
import { MarvelComponent } from './marvel.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const MAT_MODULES = [
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
]

@NgModule({
    declarations: [
        MarvelComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MarvelRoutingModule,
        RouterModule,
        ...MAT_MODULES,
    ]
})
export class MarvelModule { }
