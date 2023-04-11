import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    codeText: Array<string> = [
        'Lorem ipsum dolor sit amet',
        'class="d-flex justify-content-center"',
        'text-align: center;',
        '@Input() text!: string;',
        '<div class="container">',
        'font-family: "Roboto";',
        'constructor() { }',
        '<app-header></app-header>',
        'line-height: 1.3em;',
        'this.text = this.text;',
        '<app-footer theme="dark"></app-footer>',
        'ngOnInit(): void { }',
        '<div class="row h-75"></div>',
        'transform: translateX(3.2em);',
        'this.onClick.emit(event)',
        'Math.round(percentage * 10) / 10;',
        'animation: draw 15s ease-in-out infinite;',
        '<a href=""></a>',
        'background: $primary;',
        '*ngFor="let item of products"',
        '<ng-template #name let-row="row"></ng-template>',
        '$dimensions: calc(100% + 20px);',
        'loading = new BehaviorSubject<boolean>(true);',
        '<mat-select formControlName="price"></mat-select>',
        'this.fb.group({});',
        'this.service.getProducts()',
        '<mat-card-title></mat-card-title>',
        'border-radius: 50%;',
        '*ngIf="products.length"',
        'this.dialog.open(ConfirmDialog, {})',
    ];

    randomString!: string;

    constructor() { }

    ngOnInit() {

    }

}
