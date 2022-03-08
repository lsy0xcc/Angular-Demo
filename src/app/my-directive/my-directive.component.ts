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
    },
    {
      index: 5,
      text: 'express',
    },
    {
      index: 10,
      text: 'java',
    },
  ];
  trackByMethod(index: number, el: any): number {
    return el.id;
  }
  showIndex: number = 0;
  isValid(): boolean {
    return false;
  }
  increase(): void {
    if (this.showIndex < this.toDoList.length - 1) {
      this.showIndex++;
    }
  }
  decrease(): void{
    if (this.showIndex > 0) {
      this.showIndex--;
    }
  }
  ngOnInit(): void {
  }
}
