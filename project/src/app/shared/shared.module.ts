import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

const MAT_MODULES = [
	//MatFormFieldModule,
	//MatInputModule,
	//MatIconModule,
	//MatSelectModule,
	//MatButtonModule,
	MatSliderModule,
	//MatSnackBarModule,
	//MatListModule,
	//MatPaginatorModule,
	//MatProgressSpinnerModule,
	MatTooltipModule,
	//MatTableModule,
	//DragDropModule,
	//MatMenuModule,
	//MatDatepickerModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        //RouterModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
