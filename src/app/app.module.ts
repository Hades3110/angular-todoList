import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from "@angular/forms";
import { UpperFirstSymbolPipe } from './todo/upper-first-symbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UpperFirstSymbolPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
