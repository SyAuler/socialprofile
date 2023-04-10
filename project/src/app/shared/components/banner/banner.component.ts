import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    textHtml: string = `
    <div class="d-flex justify-content-center">
        <app-header></app-header>
        <div class="container">
            <app-banner></app-banner>
        </div>
        <app-footer theme="dark"></app-footer>
    </div>`
    textCSS: string = `.title {
        text-align: center;
        font-size: 1em;
        font-family: 'Roboto';
        font-weight: 300;
        text-transform: uppercase;
        line-height: 1.3em;
        margin: 0;
        color: white;
    }`
    textTypescript: string = `
        @Input() text!: string;
        constructor() { }
        ngOnInit(): void {
            this.text = this.text;
        }
        onButtonClick(event: any) {
            this.onClick.emit(event)
    }`

    texts: Array<string> = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor",
    ];

    randomString!: string;

    constructor() { }

    ngOnInit() {
        const randomIndex = Math.floor(Math.random() * this.texts.length);
        this.randomString = this.texts[randomIndex];
        console.log(this.randomString);

    }

}
