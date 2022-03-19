import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningAngularModule } from './learning-angular/learning-angular.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { DefaultComponent } from './default/default.component';
import { RouteTestComponent } from './route-test/route-test.component';

@NgModule({
  declarations: [AppComponent, NavigatorComponent, DefaultComponent, RouteTestComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LearningAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
