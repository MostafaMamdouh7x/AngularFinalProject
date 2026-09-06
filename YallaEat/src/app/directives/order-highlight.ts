import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({

  selector: '[appOrderHighlight]',

  standalone: true

})


export class OrderHighlightDirective {

  constructor(
    private element: ElementRef
  ) {}


  @HostListener('mouseenter')

  onMouseEnter(): void {

    this.element.nativeElement.style.transform =
      'translateX(5px)';

    this.element.nativeElement.style.background =
      '#fff8e1';

  }


  @HostListener('mouseleave')

  onMouseLeave(): void {

    this.element.nativeElement.style.transform =
      'translateX(0)';

    this.element.nativeElement.style.background =
      '#ffffff';

  }

}