import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyComComponent } from './my-com/my-com.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyStressDirective } from './my-stress.directive';
import { MyCompleteFlagPipe } from './my-complete-flag.pipe';

@NgModule({
  declarations: [
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
    MyStressDirective,
    MyCompleteFlagPipe,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
  ],
  providers: [],
})
export class LearningAngularModule {}
