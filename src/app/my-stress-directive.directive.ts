import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyStressDirective]',
})
export class MyStressDirectiveDirective {
  constructor(el: ElementRef) {
    console.log(el.nativeElement);
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
