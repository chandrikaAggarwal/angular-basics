import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class AppHighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'lime';
    }
}