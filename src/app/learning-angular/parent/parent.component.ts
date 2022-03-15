import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-angular-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myArray: number[] = [];
  childArray: number[] = [];

  generateRandom() {
    let random = Math.random();
    this.myArray.push(random);
  }

  getChild($event: number) {
    this.childArray.push($event);
  }
}
