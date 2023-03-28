import { Directive, ElementRef, Renderer2 } from '@angular/core';

const MAX_CHARACTERS = 100;
const TRUNCATE_TEXT = '...';

@Directive({
    selector: '[showIfTruncatedText]'
})
export class ShowIfBreakDirective {

    isTruncated: boolean = true;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    ngAfterViewInit() {
        const originalText = this.el.nativeElement.textContent.trim();
        let currentText = originalText;

        if (this.hasOriginalText() && this.isTruncatable()) {
            currentText = this.truncateText(originalText);
            this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
            this.renderer.listen(this.el.nativeElement, 'click', () => {
                if (currentText === originalText) {
                    currentText = this.truncateText(originalText);
                } else {
                    currentText = originalText;
                }
                this.renderer.setProperty(this.el.nativeElement, 'textContent', currentText);
            });
        }

        this.renderer.setProperty(this.el.nativeElement, 'textContent', currentText)
    }

    private hasOriginalText(): boolean {
        return this.el.nativeElement.textContent.trim().length > 0;
    }

    private isTruncatable(): boolean {
        const lineHeight = parseInt(window.getComputedStyle(this.el.nativeElement).getPropertyValue('line-height'));
        const offsetHeight = this.el.nativeElement.offsetHeight;
        return offsetHeight > (lineHeight * 2);
    }

    private truncateText(text: string): string {
        if (text.length > MAX_CHARACTERS) {
            return text.substring(0, MAX_CHARACTERS) + TRUNCATE_TEXT;
        } else {
            return text;
        }
    }

}