import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';


import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
