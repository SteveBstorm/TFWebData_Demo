import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.Highlight, [Highlight]'
})
export class HighlightDirective {

  constructor(private _html : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter():void{
    console.log('Aie! Tu m\'écrases!');
    this._html.nativeElement.style.backgroundColor = "magenta";
  }
  @HostListener('mouseleave') onMouseLeave():void{
    console.log('Ouf!');
    this._html.nativeElement.style.backgroundColor = "rgba(0,0,0,0)";
  }

}
