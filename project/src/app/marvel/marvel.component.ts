import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MarvelService } from './marvel.service';

@Component({
    selector: 'app-marvel',
    templateUrl: './marvel.component.html',
    styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent {

    @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

    herosList!: Array<any>;
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['id', 'title', 'isbn', 'description', 'modified', 'actions'];
    listLoading: boolean = false;

    pageSize = 10;
    pageIndex = 0;
    pageLength: any;
    pageSizeOptions: Array<number> = [10, 30, 45, 60];

    constructor(
        private marvelService: MarvelService,
    ) { }

    ngOnInit() {
        this.getComics()
    }

    private initDataSource(data: Array<any>) {
        this.dataSource = null as any;
        this.dataSource = new MatTableDataSource(data);
    }

    setPage(event?: any) {
        this.pageSize = event.pageSize;
        this.pageLength = event.length;
        const params = {
            offset: this.paginator.pageIndex * this.paginator.pageSize,
            limit: this.pageSize,
        };
        this.getComics(params);
    }

    getComics(params?: any) {
        this.listLoading = true;
        const reqParams = {
            limit: this.paginator.pageSize ?? this.pageSize,
            ...params,
        };
        this.marvelService.getComics(reqParams).subscribe(res => {
            this.herosList = res.data.results;
            this.pageLength = res.data.total;
            this.initDataSource(this.herosList);
            this.listLoading = false;
        });
    }

}
