import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComComponent } from './my-com/my-com.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyPipePipe } from './my-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { MyStressDirective } from './my-stress.directive';

@NgModule({
  declarations: [
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
    MyPipePipe,
    MyStressDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
    MyPipePipe,
  ],
  providers: [MyServiceService],
})
export class LearningAngularModule {}
