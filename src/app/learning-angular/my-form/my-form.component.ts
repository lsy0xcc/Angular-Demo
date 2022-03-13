import { Component, OnInit } from '@angular/core';
import { HttpNetworkService } from '../shared/http-network.service';
import { Currency } from '../shared/currency.model';
@Component({
  selector: 'learning-angular-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {

  http: HttpNetworkService;
  constructor(http: HttpNetworkService) {
    this.http = http;
  }

  ngOnInit(): void {}

  isLoading: boolean = false;
  currency: Currency[] = [];
  userName: string = '';

  upperCase($event: String) {
    this.userName = $event.toUpperCase();
  }

  upperCase2() {
    this.userName = this.userName.toUpperCase();
  }

  getCurrency() {
    this.isLoading = true;
    this.http.getData().subscribe((data) => {
      this.currency = data;
      this.isLoading = false;
    });
  }
}
