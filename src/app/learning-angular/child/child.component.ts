import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'learning-angular-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()
  fatherArray: number[] = [];
  @Output()
  toFather: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  myArray: number[] = [];
  generateRandom() {
    let random = Math.random();
    this.myArray.push(random);
    this.toFather.emit(random);
  }
}
