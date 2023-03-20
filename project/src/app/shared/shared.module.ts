import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent } from './ui/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';

const MAT_MODULES = [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
];

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    imports: [
        CommonModule,
        ...MAT_MODULES,
        RouterModule,
    ],
    exports: [
        ButtonComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
