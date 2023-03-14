import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Output() onClick = new EventEmitter<MouseEvent>();

    @Input() color!: string;
    @Input() size!: string;
    @Input() btnStyle!: string;
    @Input() icon!: string;
    @Input() text!: string;
    @Input() loading!: boolean;
    @Input() disabled!: boolean;
    @Input() transparent!: boolean;
    @Input() rounded!: boolean;
    @Input() matMenuTriggerFor!: string;

    constructor() { }

    ngOnInit(): void {
        this.text = this.text;
    }

    onButtonClick(event: any) {
        this.onClick.emit(event)
    }
}
