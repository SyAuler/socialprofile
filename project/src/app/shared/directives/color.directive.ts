import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import variables from '../../../assets/styles/abstracts/variables.scss';

@Directive({
    selector: '[color]'
})
export class ColorDirective {

    @Input('color') color!: string;

    primaryColor = variables['$primaryColor'];

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        const colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${this.color}`);
        //if (colorValue) {
            this.elementRef.nativeElement.style.color = colorValue;
            //const teste = this.renderer.setStyle(this.elementRef.nativeElement, 'color', colorValue.trim());
            //console.log('color', this.elementRef.nativeElement.style.color = colorValue)
        //}
    }

    private getColorValue(): string {
        switch (this.color) {
            case 'primary':
                return variables['$primary'];
            case 'secondary':
                return variables['secondary'];
            case 'success':
                console.log('suuuuu', this.primaryColor)
                return variables['success'];
            case 'warning':
                return variables['warning'];
            case 'info':
                return variables['info'];
            case 'danger':
                return variables['danger'];
            case 'light':
                return variables['light'];
            case 'dark':
                return variables['dark'];
            default:
                return '';
        }
    }

}
