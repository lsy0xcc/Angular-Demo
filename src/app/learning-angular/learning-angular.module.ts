import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComComponent } from './my-com/my-com.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule],
  exports: [
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
  ],
  providers: [],
})
export class LearningAngularModule {}
