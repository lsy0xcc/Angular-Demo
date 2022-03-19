import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningAngularModule } from './learning-angular/learning-angular.module';
import { DefaultComponent } from './default/default.component';
import { RouteTestComponent } from './route-test/route-test.component';

const routes: Routes = [
  { path: 'default', component: DefaultComponent },
  {
    path: 'learning',
    loadChildren: () =>
      import('./learning-angular/learning-angular-routing.module').then(
        (m) => m.LearningAngularRoutingModule
      ),
  },
  {
    path: 'router_test',
    component: RouteTestComponent,
  },
  {
    path: 'dynamic/:id',
    component: RouteTestComponent,
  },
  {
    path: 'layer1',
    children: [{ path: 'layer2', component: RouteTestComponent }],
  },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LearningAngularModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
