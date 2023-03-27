import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MAT_MODULES = [
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
]
@NgModule({
    declarations: [
        PokemonComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PokemonRoutingModule,
        RouterModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        ...MAT_MODULES,
    ]
})
export class PokemonModule { }
