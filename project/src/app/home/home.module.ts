import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const MAT_MODULES = [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...MAT_MODULES,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
