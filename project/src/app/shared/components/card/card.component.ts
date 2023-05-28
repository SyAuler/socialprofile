import { Component, Input } from '@angular/core';

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

    @Input() cardData: Item[] = [];
    @Input() cardTitle: any

    showAll: boolean = false;

}
