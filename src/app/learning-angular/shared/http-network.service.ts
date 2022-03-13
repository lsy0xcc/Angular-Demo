import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from './currency.model'

@Injectable({
  providedIn: 'root',
})
export class HttpNetworkService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getData(): Observable<Currency[]> {
    let url = 'https://api.blockchain.com/v3/exchange/tickers';
    return <Observable<Currency[]>> this.httpClient.get(url);
  }
}
