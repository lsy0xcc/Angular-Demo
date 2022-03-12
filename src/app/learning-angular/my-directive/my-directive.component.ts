import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'learning-angular-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.scss'],
})
export class MyDirectiveComponent implements OnInit {
  serv: MyServiceService;
  constructor(serv: MyServiceService) {
    this.serv = serv;
  }
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
      this.serv.doLog('increase');
    }
  }
  decrease(): void {
    if (this.showIndex > 0) {
      this.showIndex--;
      this.serv.doLog('decrease');
    }
  }
  toggle(): void {
    this.isValid = !this.isValid;
  }
  ngOnInit(): void {}
}
