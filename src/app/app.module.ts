import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demoMaterial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarInputComponent } from './calendar-input/calendar-input.component';
// import { MaxRangeDirective } from './calendar-input/test';

@NgModule({
  declarations: [
    AppComponent,
    CalendarInputComponent,
    // MaxRangeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
