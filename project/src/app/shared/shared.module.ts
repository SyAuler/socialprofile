import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent } from './ui/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const MAT_MODULES = [
	//MatFormFieldModule,
	//MatInputModule,
	//MatSelectModule,
	MatIconModule,
	MatButtonModule,
	MatSliderModule,
	//MatSnackBarModule,
	//MatListModule,
	//MatPaginatorModule,
	//MatProgressSpinnerModule,
	MatTooltipModule,
	//MatTableModule,
	//DragDropModule,
	MatMenuModule,
	//MatDatepickerModule,
];

@NgModule({
	declarations: [
		ButtonComponent
	],
	imports: [
		CommonModule,
		...MAT_MODULES,
		//RouterModule,
	],
	exports: [
		ButtonComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
