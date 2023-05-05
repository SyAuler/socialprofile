import { Component, EventEmitter, Input, Output, ViewChild, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;

    @Input() data: Array<[any]> = [];
    @Input() columnsData: Array<any> = [];
    @Input() listLoading: boolean = false;
    @Input() defaultOrdering: string = '-id';
    @Input() paginate: boolean = true;
    @Input() page: number = 1;
    @Input() pageSize: number = 10;
    @Input() count!: number;
    @Input() pageSizeOptions = [10, 20, 50, 100];

    @Input() headerTemplate!: TemplateRef<any>;
    @Input() cellTemplate!: TemplateRef<any>;

    @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
    @Output() requestParamsOutput = new EventEmitter<any>();

    dataSource = new MatTableDataSource<any>([]);
    ordering: string = this.defaultOrdering;
    requestParams: any = {
        ordering: this.ordering,
        page: this.page,
        page_size: this.pageSize,
    };

    constructor() { }

    ngOnInit(): void { }  

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        /* this.paginator.page.subscribe(event => {
            this.loadData(event);
        }); */
    }

    ngOnChanges(changes: SimpleChanges) {
        const changeInfo = changes['data'];
        if (!changeInfo) {
            return;
        }
        if (changeInfo.firstChange) {
            this.initDataSource(this.data);
        } else {
            this.dataSource = new MatTableDataSource(changeInfo.currentValue);
        }
    }

    setParams(): void {
        this.requestParams.ordering = this.ordering;
        this.requestParams.page = this.page;
        this.requestParams.page_size = this.pageSize;

        this.requestParamsOutput.emit(this.requestParams);
    }

    private initDataSource(data: any): void {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    sortData(event: any): void {
        const direction = event.direction != '' && event.direction == 'desc' ? '-' : '';
        this.ordering = `${direction}${event.active}`

        if (event.direction == '') {
            this.ordering = this.defaultOrdering;
        }

        this.setParams();
    }

    pageEvents(event: PageEvent): void {
        this.ordering = this.defaultOrdering;
        this.page = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        this.setParams();
    }

    loadData(event?: any) {
        const params = {
            pageIndex: event.pageIndex,
            pageSize: event.pageSize,
            ordering: event.sorting?.columnName + ' ' + event.sorting?.direction
        };
        this.requestParamsOutput.emit(params);
    }
    
    get checkHeader(): boolean {
        return this.columnsData.some(col => col.headerTemplate);
    }

    get displayedColumns(): string[] {
        return this.columnsData.map(col => col.id);
    }

    getColumnData(columnName: string): any {
        return this.columnsData.find(c => c.id === columnName);
    }

    getCellValue(rowData: any, columnName: string): any {
        const columnData = this.getColumnData(columnName);
        if (columnData?.cellTemplate) {
            return columnData.cellTemplate({ index: rowData });
        } else {
            return rowData[columnName];
        }
    }

    getHeaderTemplate(columnName: string): any {
        const columnData = this.getColumnData(columnName);
        return columnData.headerTemplate;
    }
}
