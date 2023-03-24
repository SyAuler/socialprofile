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

    @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort!: MatSort;

    pokemonList: any;
    berryList: any;
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['name', 'url'];
    listLoading: boolean = false;

    pageSize = 15;
    pageIndex = 0;
    pageLength: any;
    pageSizeOptions: Array<number> = [15, 30, 45, 60];

    constructor(
        private pokemonService: PokemonService,
    ) { }

    ngOnInit() {
        this.getPokemon();
    }

    private initDataSource(data: Array<any>) {
        this.listLoading = true;
        this.dataSource = null as any;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.listLoading = false;
    }
    
    setPage(event?:any) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.pageLength = event.length;
        const params = {
            offset: this.pageIndex * this.pageSize,
            limit: this.pageSize,
        }
        this.getPokemon(params)
    }

    getPokemon(value?:any) {
        const params = {
            limit: this.pageSize,
            offset: this.pageIndex * this.pageSize,
            ...value
        }

        this.pokemonService.getPokemon(params).subscribe(res => {
            this.pokemonList = res.results;
            this.pageLength = res.count;
            this.initDataSource(this.pokemonList)
        })
    }

    getBerry() {
        const params = {
            id: 10,
            name: 'cheri',
        }
        this.pokemonService.getBerry(params.id).subscribe(res => {
            this.berryList = res;
            console.log('berryList', this.berryList)
        })
    }

    applyFilter(event?: any) {

    }
}