import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.scss'],
})
export class MyComComponent implements OnInit {
  constructor() {}
  userName = 'John';
  paraTitle = 'This is title.';
  blueBack: string = '#CCCCFF';
  paragraphWidth: number = 300;
  isWarnning: boolean = true;
  styleObj: any = {
    backgroundColor: '#CCFFCC',
    width: '250px',
  };
  classObj: any = {
    'big-font': true,
    'red-back': true,
    'green-back': false,
  };

  ngOnInit(): void {}

  clickPara(e: any): void {
    console.log(e);
  }
  toggleButton(): void {
    this.isWarnning = !this.isWarnning;
    let newObj: any = {
      'big-font': true,
    };
    newObj['red-back'] = this.isWarnning;
    newObj['green-back'] = !this.isWarnning;
    this.classObj = newObj;
  }
}
