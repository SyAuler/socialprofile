import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

export interface Item {
    id: number
    name: string
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @ViewChild('cardBody') cardBody!: ElementRef<HTMLDivElement>;

    @Input() cardData: Item[] = [];
    @Input() cardTitle: any

    showAll: boolean = false;
    originalHeight!: number;

    constructor() { }

    ngAfterViewInit() {
        this.originalHeight = this.cardBody.nativeElement.offsetHeight;
        this.checkShowAllButton();
    }

    @HostListener('window:resize')
    onWindowResize() {
        this.checkShowAllButton();
    }

    checkShowAllButton() {
        const currentHeight = this.cardBody.nativeElement.offsetHeight;
        if (currentHeight > this.originalHeight) {
            this.showAll = true;
        } else {
            this.showAll = false;
        }
    }
}
