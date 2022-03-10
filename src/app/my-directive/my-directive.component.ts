import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.scss'],
})
export class MyDirectiveComponent implements OnInit {
  constructor() {}
  toDoList: any[] = [
    {
      index: 1,
      text: 'Angular',
      complete: false,
    },
    {
      index: 5,
      text: 'express',
      complete: false,
    },
    {
      index: 10,
      text: 'java',
      complete: true,
    },
  ];
  trackByMethod(index: number, el: any): number {
    return el.id;
  }
  showIndex: number = 0;
  isValid: boolean = false;
  increase(): void {
    if (this.showIndex < this.toDoList.length - 1) {
      this.showIndex++;
    }
  }
  decrease(): void {
    if (this.showIndex > 0) {
      this.showIndex--;
    }
  }
  toggle(): void {
    this.isValid = !this.isValid;
  }
  ngOnInit(): void {}
}
