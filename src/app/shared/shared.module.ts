import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultComponent, NavigatorComponent, RouteTestComponent],
  imports: [CommonModule, RouterModule],
  exports: [DefaultComponent, NavigatorComponent, RouteTestComponent],
})
export class SharedModule {}
