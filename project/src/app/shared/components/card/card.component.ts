import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

}
