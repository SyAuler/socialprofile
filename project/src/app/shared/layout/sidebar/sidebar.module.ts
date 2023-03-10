import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../shared.module';

import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const MAT_MODULES = [
	RouterModule,
	MatListModule,
	MatIconModule,
	MatTooltipModule,
]

@NgModule({
    declarations: [SidebarComponent],
    imports: [
        CommonModule,
        SharedModule,
        ...MAT_MODULES,
    ],
    exports: [
        SidebarComponent,
    ]
})
export class SidebarModule { }
