import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myStress]',
})
export class MyStressDirective {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.backgroundColor = 'yellow';
  }
}
