import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLogService {

  constructor() { }

  doLog(action:any) {
    console.log(new Date().toISOString(), action)
  }
}
