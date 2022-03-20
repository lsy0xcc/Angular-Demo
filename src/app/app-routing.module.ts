import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningAngularModule } from './learning-angular/learning-angular.module';
import { DefaultComponent } from './shared/default/default.component';
import { RouteTestComponent } from './shared/route-test/route-test.component';
import { QueryGuard } from './core/query.guard';

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
  {
    path: 'router_guard',
    component: RouteTestComponent,
    canActivate: [QueryGuard],
  },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LearningAngularModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
