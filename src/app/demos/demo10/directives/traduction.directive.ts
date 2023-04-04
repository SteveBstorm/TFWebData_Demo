import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[traduction]'
})
export class TraductionDirective {

  constructor(private _html: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    console.log(this._html);
    switch (this._html.nativeElement.innerText) {
      case 'Hello':
        this._html.nativeElement.innerText = 'Bonjour';
        break;
      case 'world':
        this._html.nativeElement.innerText = 'monde';
        break;
      default:
        break;
    }
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    switch (this._html.nativeElement.innerText) {
      case 'Bonjour':
        this._html.nativeElement.innerText = 'Hello';
        break;
      case 'monde':
        this._html.nativeElement.innerText = 'world';
        break;
      default:
        break;
    }
  }

}
