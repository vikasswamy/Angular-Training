import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { NewinlineComponent } from './newinline/newinline.component';
import { OnlyhtmlinlineComponent } from './onlyhtmlinline/onlyhtmlinline.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    NewcomponentComponent,
    NewinlineComponent,
    OnlyhtmlinlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
