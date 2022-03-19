import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyComComponent } from './my-com/my-com.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'com',
    component: MyComComponent,
  },
  {
    path: 'directive',
    component: MyDirectiveComponent,
  },
  {
    path: 'form',
    component: MyFormComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningAngularRoutingModule {}
