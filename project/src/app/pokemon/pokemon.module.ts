import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PokemonRoutingModule } from './pokemon-routing.module';



@NgModule({
    declarations: [
        PokemonComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PokemonRoutingModule,
        RouterModule,
    ]
})
export class PokemonModule { }
