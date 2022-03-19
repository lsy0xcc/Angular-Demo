import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  codeRoute(): void {
    this.router.navigate(['/router_test'], {
      queryParams: {
        id: 123,
        type: 'ts',
      },
      // skipLocationChange: true,
    });
  }

  codeRoute2(): void {
    this.router.navigate(['/layer1', 'layer2'], {
      queryParams: {
        id: 123,
        type: 'ts',
      },
      // skipLocationChange: true,
    });
  }

  codeRoute3() {
    this.router.navigate(['/dynamic/', '123'], {});
  }
}
