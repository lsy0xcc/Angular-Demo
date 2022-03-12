import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-angular-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = '';

  upperCase($event: String) {
    this.userName = $event.toUpperCase();
  }

  upperCase2() {
    this.userName = this.userName.toUpperCase();
  }
}
