import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  initialColor: string = "#f5f5f5"
  defaultColor: string = "#009688"

  constructor(private el: ElementRef) {

    this.setBorder(this.initialColor);
  }

  @Input('pkmBorderCard') borderColor: string; //allias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color:string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
