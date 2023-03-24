import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../../shared.module';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonModule,
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
