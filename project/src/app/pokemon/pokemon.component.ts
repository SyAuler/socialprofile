import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from './pokemon.service';
export interface UserData {
    name: string;
    url: string;
}

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    pokemonList: any = document.getElementById('pokemonList');
    mostrarCollapse: any = [];
    selectedItem!: { semana: number | null };
    listLoading: boolean = false;

    pageSize = 12;
    pageIndex = 1;
    pageLength: any;

    constructor(
        private pokemonService: PokemonService,
    ) { }


    ngOnInit() {
        this.getPokemon();
    }

    onPageChange(pageNumber: number) {
        this.pageIndex = pageNumber;
        this.getPokemon();
    }

    getPageNumbers(): number[] {
        const totalPages = this.getTotalPages();
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    getTotalPages(): number {
        return Math.ceil(this.pokemonList?.length / this.pageSize);
    }

    getPokemon() {
        const params = {
            offset: (this.pageIndex - 1) * this.pageSize,
            limit: this.pageSize,
        };
        this.listLoading = true;
        this.pokemonService.getPokemonWithDetail(params).subscribe(
            (res) => {
                this.pokemonList = res;
                this.listLoading = false;
            },
            (error) => {
                console.error('Error fetching Pokémon:', error);
                this.listLoading = false;
            }
        );
    }

    abrirCollapse(semana: number) {
        const selectedItem = { semana };
        if (this.selectedItem?.semana === semana) {
            this.mostrarCollapse[semana] = !this.mostrarCollapse[semana];
        } else {
            this.mostrarCollapse.fill(false);
            this.mostrarCollapse[semana] = true;
            this.selectedItem = selectedItem;
        }
    }
}