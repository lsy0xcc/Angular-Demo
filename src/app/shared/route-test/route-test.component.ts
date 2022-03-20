import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-route-test',
  templateUrl: './route-test.component.html',
  styleUrls: ['./route-test.component.scss'],
})
export class RouteTestComponent implements OnInit {
  queryParams: any;
  snapShot: any;
  params: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
    });
    this.snapShot = this.route.snapshot;
    console.log(this.route);
  }

  ngOnInit(): void {}
}
