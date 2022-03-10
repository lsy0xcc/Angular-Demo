import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComComponent } from './my-com/my-com.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyStressDirectiveDirective } from './my-stress-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent,
    MyDirectiveComponent,
    MyFormComponent,
    MyStressDirectiveDirective,
    MyPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
